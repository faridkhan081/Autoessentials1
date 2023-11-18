const Conversation = require("../model/conversation");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const express = require("express");
const { isSeller, isAuthenticated } = require("../middleware/auth");
const router = express.Router();
const path = require('path');
const fs = require('fs');

const intentsPath = path.join(__dirname, 'intents.json');

function getBotResponse(userMessage) {
  const intents = JSON.parse(fs.readFileSync(intentsPath, 'utf-8'));

  for (const item of intents.processed_data) {
    const tokens = item.tokens;
    const tag = item.tag;
    const responses = item.responses;

    const match = tokens.some(token => userMessage.includes(token));

    if (match) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  return "I'm sorry, I didn't understand that.";
}

router.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  const botResponse = getBotResponse(userMessage);
  res.json({ message: botResponse });
});


// create a new conversation
router.post(
  "/create-new-conversation",
  catchAsyncError(async (req, res, next) => {
    try {
      const { userId, sellerId } = req.body;

      // Check if a conversation with the specified user and seller already exists
      const existingConversation = await Conversation.findOne({
        members: { $all: [userId, sellerId] },
      });

      if (existingConversation) {
        console.log("Conversation already exists:", existingConversation);
        res.status(200).json({
          success: true,
          conversation: existingConversation,
        });
      } else {
        // If not, create a new conversation
        const newConversation = await Conversation.create({
          members: [userId, sellerId],
        });

        console.log("New conversation created:", newConversation);

        res.status(201).json({
          success: true,
          conversation: newConversation,
        });
      }
    } catch (error) {
      console.error("Error creating conversation:", error);
      return next(new ErrorHandler(error.response.message), 500);
    }
  })
);


// get seller conversations
router.get(
  "/get-all-conversation-seller/:id",
  isSeller,
  catchAsyncError(async (req, res, next) => {
    try {
      const conversations = await Conversation.find({
        members: {
          $in: [req.params.id],
        },
      }).sort({ updatedAt: -1, createdAt: -1 });

      res.status(201).json({
        success: true,
        conversations,
      });
    } catch (error) {
      return next(new ErrorHandler(error), 500);
    }
  })
);

router.delete(
  "/delete-conversation/:id",
  catchAsyncError(async (req, res, next) => {
    try {
      await Conversation.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "Conversation deleted successfully",
      });
    } catch (error) {
      return next(new ErrorHandler(error), 500);
    }
  })
);


// get user conversations
router.get(
  "/get-all-conversation-user/:id",
  isAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const conversations = await Conversation.find({
        members: {
          $in: [req.params.id],
        },
      }).sort({ updatedAt: -1, createdAt: -1 });

      res.status(201).json({
        success: true,
        conversations,
      });
    } catch (error) {
      return next(new ErrorHandler(error), 500);
    }
  })
);

// update the last message
router.put(
  "/update-last-message/:id",
  catchAsyncError(async (req, res, next) => {
    try {
      const { lastMessage, lastMessageId } = req.body;

      const conversation = await Conversation.findByIdAndUpdate(req.params.id, {
        lastMessage,
        lastMessageId,
      });

      res.status(201).json({
        success: true,
        conversation,
      });
    } catch (error) {
      return next(new ErrorHandler(error), 500);
    }
  })
);

module.exports = router;