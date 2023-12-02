import React, { useEffect, useState } from "react";
import "./App.css";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import { server } from "./server";
import ProtectedRoute from "./routes/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  ForgetPasswordPage,
  ResetPasswordPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  TermsAndConditions,
  PrivacyPolicy ,

  // BestSellingPage,
  EventsPage,
  SolutionsPage,
  FaqsPage,
  ProductDetailsPage,
  CheckoutPage,
  ShopCreatePage,
  PaymentPage,
  ProfilePage,
  SellerActivationPage,
  ShopLoginPage,
  PageNotFound,
  ContactPage,
  OrderSuccessPage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
} from "./routes/Routes.js";

//shop imports

import { ShopDashboardPage } from "./routes/ShopRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";

import {
  ShopHomePage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopUpdateProduct,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
  ShopInboxPage 
} from "./ShopRoutes.js";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute.js";
import { getAllProducts, getSingleProduct } from "./redux/actions/product";
import AboutPage from "./pages/AboutPage";
import { getAllEvents } from "./redux/actions/event";
import axios from "axios";

import {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw,
  AdminShopRequest 
} from "./routes/AdminRoutes";

const App = () => {
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    Store.dispatch(getSingleProduct());
    getStripeApikey();
  }, []);

  return (
    <>
      <BrowserRouter>
        {stripeApikey && (
          <Elements stripe={loadStripe(stripeApikey)}>
            <Routes>
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <PaymentPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Elements>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/reset-password/:resetToken" element={<ResetPasswordPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route
            path="/seller/activation/:activation_token"
            element={<SellerActivationPage />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />

          {/* <Route path="/best-selling" element={<BestSellingPage />} /> */}
          <Route path="/events" element={<EventsPage />} />


         

          <Route
            path="/solutions"
            element={
              <ProtectedRoute>
              <SolutionsPage />
              </ProtectedRoute>
            }
          />

          <Route path="/faq" element={<FaqsPage />} />
          <Route path="/order/success" element={<OrderSuccessPage />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user/order/:id"
            element={
              <ProtectedRoute>
                <OrderDetailsPage />
              </ProtectedRoute>
            }
          />

<Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <UserInbox />
            </ProtectedRoute>
          }
        />
          <Route
            path="/user/track/order/:id"
            element={
              <ProtectedRoute>
                <TrackOrderPage />
              </ProtectedRoute>
            }
          />
          {/* shop routes */}
          <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
          <Route path="/shop-create" element={<ShopCreatePage />} />
          <Route path="/shop-login" element={<ShopLoginPage />} />
          <Route
            path="/shop/:id"
            element={
              <SellerProtectedRoute>
                <ShopHomePage />
              </SellerProtectedRoute>
            }
          />

          <Route
            path="/seller-dashboard"
            element={
              <SellerProtectedRoute>
                <ShopDashboardPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-orders"
            element={
              <SellerProtectedRoute>
                <ShopAllOrders />
              </SellerProtectedRoute>
            }
          />

          <Route
            path="/order/:id"
            element={
              <SellerProtectedRoute>
                <ShopOrderDetails />
              </SellerProtectedRoute>
            }
          />

          <Route
            path="/dashboard-create-product"
            element={
              <SellerProtectedRoute>
                <ShopCreateProduct />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-update-product/:id"
            element={
              <SellerProtectedRoute>
                <ShopUpdateProduct />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-products"
            element={
              <SellerProtectedRoute>
                <ShopAllProducts />
              </SellerProtectedRoute>
            }
          />

          <Route
            path="/dashboard-create-event"
            element={
              <SellerProtectedRoute>
                <ShopCreateEvents />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-events"
            element={
              <SellerProtectedRoute>
                <ShopAllEvents />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-coupouns"
            element={
              <SellerProtectedRoute>
                <ShopAllCoupouns />
              </SellerProtectedRoute>
            }
          />

          <Route
            path="/dashboard-refunds"
            element={
              <SellerProtectedRoute>
                <ShopAllRefunds />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-withdraw-money"
            element={
              <SellerProtectedRoute>
                <ShopWithDrawMoneyPage />
              </SellerProtectedRoute>
            }
          />
           <Route
            path="/dashboard-messages"
            element={
              <SellerProtectedRoute>
                <ShopInboxPage />
              </SellerProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <SellerProtectedRoute>
                <ShopSettingsPage />
              </SellerProtectedRoute>
            }
          />


          {/* admin routes */}
          <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />

<Route
          path="/admin-shop-requests"
          element={
            <ProtectedAdminRoute>
              <AdminShopRequest />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardUsers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-sellers"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardSellers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-orders"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardOrders />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path="/admin-products"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardProducts />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path="/admin-events"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardEvents />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path="/admin-withdraw-request"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardWithdraw />
            </ProtectedAdminRoute>
          }
        />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
};

export default App;
