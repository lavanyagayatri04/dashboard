import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/*Side Nav */}
      <aside className="sidebar">
        <a href='#'><i class="fa-brands fa-joomla"></i></a>
        <a href='#'><i class="fa-solid fa-house-chimney"></i></a>
        <a href='#'><i class="fa-solid fa-square-poll-vertical"></i></a>
        <a href='#'><i class="fa-solid fa-square-check"></i></a>
        <a href='#'><i class="fa-solid fa-wallet"></i></a>
        <a href='#'><i class="fa-solid fa-bag-shopping"></i></a>
        <a href='#'><i class="fa-solid fa-right-from-bracket"></i></a>
      </aside>
      <main className="main-content">
        {/*Header section*/}
        <header className="header">
          <div className="mobile-header">
            <div className="logo-section">
               <a href='#'><i class="fa-brands fa-joomla"></i></a>
            </div>
            <div class="menu">
              <input type="checkbox" id="check"/>
              <label for="check" class="button">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <nav>
                <a href="#">Home</a>
                <a href="#">Insights</a>
                <a href="#">Check list</a>
                <a href="#">Subscription</a>
                <a href="#">Profit</a>
                <a href="#">Logout</a>
              </nav>
            </div>	
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>

          <div className="user-profile">
            <ul>
              <li><i class="fa-solid fa-gear"></i></li>
              <li><i class="fa-solid fa-bell"></i></li>
              <li><img src="profile.png" alt="profile"></img></li>
            </ul>
          </div>

        </header>
        {/*content starts */}
        <section className="dashboard">
          <h1 className="heading">Dashboard</h1>
          {/*Orders section */}
          <div className="dashboard-header">
            <div className="dashboard-item">
              <i className="fa fa-shopping-cart card-icon orders"></i>
              <h3>Total Orders</h3>
              <div className="count">
                <p>75</p>
                <i class="fa-solid fa-arrow-up"><span>5%</span></i>
              </div>
            </div>
            <div className="dashboard-item">
              <i className="fa fa-truck card-icon delivered"></i>
              <h3>Total Delivered</h3>
              <div className="count">
                <p>70</p>
                <i class="fa-solid fa-arrow-down">3%</i>
              </div>
            </div>
            <div className="dashboard-item">
              <i className="fa fa-times card-icon cancelled"></i>
              <h3>Total Cancelled</h3>
              <div className="count">
                <p>05</p>
                <i class="fa-solid fa-arrow-up">5%</i>
              </div>
            </div>
            <div className="dashboard-item">
              <i className="fa fa-dollar-sign card-icon revenue"></i>
              <h3>Total Revenue</h3>
              <div className="count">
                <p>$12k</p>
                <i class="fa-solid fa-arrow-down">3%</i>
              </div>
            </div>
            <div className="dashboard-item net-profit">
              <h3>Net Profit</h3>
              <i class="fa-solid fa-coins"></i>
              <p>$6759.25</p>
            </div>
          </div>
          {/*Activity section */}
          <div className="activity">
            <h3>Activity</h3>
            <img src='graph.png'></img>
          </div>
          {/*Customer Details */}
          <div className="customer-details">
            <div className="recent-orders">
              <h3>Recent Orders</h3>
              <div className="orders-list">
                <table>
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Order No.</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span><img src="avatar2.png" />Wade Warren</span></td>
                      <td>15478256</td>
                      <td>$124.00</td>
                      <td className='success'>Delivered</td>
                    </tr>
                    <tr>
                      <td><span><img src="avatar2.png" />Jane Cooper</span></td>
                      <td>48965786</td>
                      <td>$305.02</td>
                      <td className='success'>Delivered</td>
                    </tr>
                    <tr>
                      <td><span><img src="avatar2.png" />Guy Hawkins</span></td>
                      <td>78958215</td>
                      <td>$45.88</td>
                      <td className='fail'><p>Cancelled</p></td>
                    </tr>
                    <tr>
                      <td><span><img src="avatar2.png" />Wade Warren</span></td>
                      <td>15478256</td>
                      <td>$124.00</td>
                      <td className='success'>Delivered</td>
                    </tr>
                    <tr>
                      <td><span><img src="avatar2.png" />Wade Warren</span></td>
                      <td>15478256</td>
                      <td>$124.00</td>
                      <td className='success'>Delivered</td>
                    </tr>
                    <tr>
                      <td><span><img src="avatar2.png" />Wade Warren</span></td>
                      <td>15478256</td>
                      <td>$124.00</td>
                      <td className='success'>Delivered</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="feedback">
              <h3>Customer's Feedback</h3>
              <div className="feedback-list">
                <div className="feedback-item">
                  <div className="avatar-section">
                    <img src="avatar1.png" alt="avatar"></img>
                    <h4>Jenny Wilson</h4>
                  </div>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>The food was excellent and so was the service...</p>
                </div>
                <div className="feedback-item">
                  <div className="avatar-section">
                    <img src="avatar1.png" alt="avatar"></img>
                    <h4>Dianne Russell</h4>
                  </div>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>We enjoyed the Eggs Benedict served on homemade focaccia bread...</p>
                </div>
                <div className="feedback-item">
                  <div className="avatar-section">
                    <img src="avatar1.png" alt="avatar"></img>
                    <h4>Devon Lane</h4>
                  </div>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>Normally wings are wings, but these are lean meaty and tender...</p>
                </div>
                <div className="feedback-item">
                  <div className="avatar-section">
                    <img src="avatar1.png" alt="avatar"></img>
                    <h4>Jenny Wilson</h4>
                  </div>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p>The food was excellent and so was the service...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*content starts */}
      </main>
    </div>
  );
};

export default App;
