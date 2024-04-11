import React from 'react';
import { Link } from 'react-router-dom';
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable, HiDocumentText, HiQuestionMarkCircle } from "react-icons/hi";
import './Sidebar.css'; // Import CSS for sidebar styles

const Sidebar = () => {
  return (
    <div className="sidebar bg-blue-300">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <Link to="/blog" className="sidebar-menu-link">
            <div className="flex_me">
              <HiChartPie className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Dashboard</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/kanban" className="sidebar-menu-link">
            <div className="flex_me">
              <HiViewBoards className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Kanban</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/inbox" className="sidebar-menu-link">
            <div className="flex_me">
              <HiInbox className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Inbox</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/users" className="sidebar-menu-link">
            <div className="flex_me">
              <HiUser className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Users</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/products" className="sidebar-menu-link">
            <div className="flex_me">
              <HiShoppingBag className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Products</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/signin" className="sidebar-menu-link">
            <div className="flex_me">
              <HiArrowSmRight className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Sign In</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/signup" className="sidebar-menu-link">
            <div className="flex_me">
              <HiTable className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Sign Up</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/upgrade" className="sidebar-menu-link">
            <div className="flex_me">
              <HiChartPie className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Upgrade to Pro</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/documentation" className="sidebar-menu-link">
            <div className="flex_me">
              <HiDocumentText className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Documentation</span>
            </div>
          </Link>
        </li>
        {/* <li className="sidebar-menu-item">
          <Link to="/help" className="sidebar-menu-link">
            <div className="flex_me">
              <HiQuestionMarkCircle className="sidebar-menu-icon" />
              <span className="sidebar-menu-text">Help</span>
            </div>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
