import React from 'react'

function Notificationbar() {
  return (
          <div className="form-container">
            <h2>Send Notification / Warning</h2>
            <form className="task-form">
              <div className="form-group">
                <label>Select Employee</label>
                <select>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Mike Johnson</option>
                  <option>Sarah Williams</option>
                </select>
              </div>
              <div className="form-group">
                <label>Type</label>
                <select>
                  <option>Notification</option>
                  <option>Warning</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>
        );
}

export default Notificationbar