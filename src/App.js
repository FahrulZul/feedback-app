import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Header />
            <div className="main">
                <div className="main_box">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        />

                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>

                <AboutIconLink />
            </div>
        </FeedbackProvider>
    );
}

export default App;
