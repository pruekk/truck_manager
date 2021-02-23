import React from 'react'
import { Link } from 'react-router-dom'
import { Space, Typography, Divider} from 'antd'


const Navbar: React.FC = () => {
    return (
    <Space split={<Divider type="vertical"/>}>
        <Link to="/" component={Typography.Link}>HomePage</Link>
        <Link to="/about" component={Typography.Link}>About</Link>
        <Link to="/login" component={Typography.Link}>Login</Link>
    </Space>
    )
}

export default Navbar