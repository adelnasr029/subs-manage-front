import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
        <p>
        <h1>Transform the Way You Manage Business</h1>
            Whether you're a <strong>teacher</strong> managing course enrollments, a <strong>physician</strong> scheduling patient plans, a <strong>gym owner</strong> tracking member subscriptions or a <strong>business owner</strong> overseeing recurring services, we’re here to help you digitize and optimize your processes. Our solutions are tailored to help you reach your target audience, make data-driven decisions, and grow your business with confidence.
          </p>   
          { !localStorage.getItem("isAuthenticated") &&  <div className="cta-section">
              <h3>Ready to Simplify Your Subscription Process?</h3>
            <button className="signup-btn" onClick={() => navigate('/dashboard')}>
              Login as a Guest  
              </button>
              <p className="guest-option">
              to discover the system.
              </p>
            </div> }
            <div class="growth-section">
        <h3 class="heading">What’s Holding You Back from Growing Your Business?</h3>
        <p class="description">
          Scaling your business can be challenging, especially when it comes to managing operations on a larger scale. That’s where we come in. Our modern technology solutions save you time and money, empowering you to manage your business anytime, anywhere. Stay connected with your clients and focus on growth while we handle the complexities.
        </p>
        <div class="icon-grid">
          <div class="icon-card">
            <div class="icon bg-blue">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <div>
              <h4 class="icon-title">Mobile</h4>
              <p class="icon-description">Manage your business on the go with our mobile-friendly tools.</p>
            </div>
          </div>

          <div class="icon-card">
            <div class="icon bg-green">
              <i class="fas fa-tablet-alt"></i>
            </div>
            <div>
              <h4 class="icon-title">Tablet</h4>
              <p class="icon-description">Seamlessly manage operations with a responsive tablet interface.</p>
            </div>
          </div>

          <div class="icon-card">
            <div class="icon bg-purple">
              <i class="fas fa-laptop"></i>
            </div>
            <div>
              <h4 class="icon-title">Laptop</h4>
              <p class="icon-description">Access advanced tools and stay productive on your laptop.</p>
            </div>
          </div>

          <div class="icon-card">
            <div class="icon bg-orange">
              <i class="fas fa-desktop"></i>
            </div>
            <div>
              <h4 class="icon-title">PC</h4>
              <p class="icon-description">Take full control of your operations on your desktop computer.</p>
            </div>
          </div>

          <div class="icon-card">
            <div class="icon bg-yellow">
              <i class="fas fa-bell"></i>
            </div>
            <div>
              <h4 class="icon-title">Stay Notified</h4>
              <p class="icon-description">Keep clients informed with updates and notifications in real-time.</p>
            </div>
          </div>

          <div class="icon-card">
            <div class="icon bg-teal">
              <i class="fas fa-chart-line"></i>
            </div>
            <div>
              <h4 class="icon-title">Focus on Growth</h4>
              <p class="icon-description">Let us handle the complexities so you can scale effortlessly.</p>
            </div>
          </div>
        </div>
        </div>

      <div className="features-section">
        <h3>Why Choose Us?</h3>
        <div className="feature-list">
          <div className="feature-item">
            <i className="icon">📊</i>
            <h4>Real-Time Tracking</h4>
            <p>Monitor all your subscriptions in one place with live updates.</p>
          </div>
          <div className="feature-item">
            <i className="icon">🔒</i>
            <h4>Secure & Reliable</h4>
            <p>Your data is protected with industry-leading security measures.</p>
          </div>
          <div className="feature-item">
            <i className="icon">⏰</i>
            <h4>Automated Reminders</h4>
            <p>Never miss a payment with timely reminders and alerts.</p>
          </div>
        </div>
      </div>
        {/* Use Case Scenarios Section */}
        <div className="use-cases-section">
          <h3>How We Help You Succeed</h3>
          <div className="use-case-list">
            <div className="use-case-item">
              <h4>For Teachers</h4>
              <p>Digitize course enrollments, track student subscriptions, and analyze engagement data to improve your offerings.</p>
            </div>
            <div className="use-case-item">
              <h4>For Gym Owners</h4>
              <p>Manage member subscriptions, automate renewals, and use data to retain clients and grow your fitness business.</p>
            </div>
            <div className="use-case-item">
              <h4>For Clinics</h4>
              <p>Streamline patient plans, track recurring payments, and enhance client satisfaction with seamless subscription management.</p>
            </div>
            <div className="use-case-item">
              <h4>For Business Owners</h4>
              <p>Optimize recurring services, analyze customer trends, and make data-driven decisions to scale your operations.</p>
            </div>
          </div>
        </div>
    </div>
  );
}