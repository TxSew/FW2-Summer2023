import { Navigate } from "react-router-dom";

const Private = ({ component: Component, isAdmin }) => {
    // Kiểm tra xem người dùng đã đăng nhập và có quyền 'admin' hay không
    const isLoggedIn = true; // Đã đăng nhập - điều kiện tùy vào ứng dụng của bạn
    const userRole = 'admin'; // Ví dụ: 'admin', 'member', 'guest'
    const hasAdminRole = userRole === 'admin';
  
    // Kiểm tra xem người dùng đã đăng nhập và có quyền 'admin' (nếu yêu cầu) hay không
    if (!isLoggedIn || (isAdmin && !hasAdminRole)) {
      // Nếu không đáp ứng yêu cầu phân quyền, chuyển hướng đến trang không được phép hoặc trang đăng nhập (tùy vào ứng dụng của bạn)
      return <Navigate to="/unauthorized" />;
    }
  
    // Nếu người dùng đã đăng nhập và đáp ứng yêu cầu phân quyền, hiển thị component đã được truyền vào
    return <Component />;
  };
  
  export default Private;