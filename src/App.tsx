import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import PaymentMethodsPage from "./pages/payment-methods";
import LoginPage from "./pages/login";
import AdminPage from "./pages/admin";
import { AuthProvider } from "./context/auth-context";
import PrivateRoute from "./components/private-route";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="flex-grow">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/contacto" component={ContactPage} />
              <Route path="/medios-de-pago" component={PaymentMethodsPage} />
              <Route path="/login" component={LoginPage} />
              <PrivateRoute path="/admin" component={AdminPage} />
              <Redirect to="/" />
            </Switch>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;