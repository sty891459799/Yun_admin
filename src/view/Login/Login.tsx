import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import Api from '../../utils/http/Api';
import './Login.less';
import md5 from 'js-md5';
type Props = {
	history: any;
}
const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};
class Login extends Component<Props> {
	public onFinish = (values: any) => {
		values.password = md5(values.password) // 密码md5处理
		Api.login(values).then((res) => {
			console.log(res);
			if (res.message === 'success') {
				sessionStorage.setItem('token', res.data.token) // 存入token
				this.props.history.push('/'); // 并且跳转
			}
		}).catch(error => {
			console.log(error)
		})
	};
	public onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	render() {
		return (
			<div className="bgc">
				<div className="loginModule">
					<Form
						{...layout}
						name="login"
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
						initialValues={{ username: 'sy6688', password: '666888' }}
					>
						<Form.Item
							label="用户名"
							name="username"
							rules={[{ required: true, message: '请输入用户名!' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="密码"
							name="password"
							rules={[{ required: true, message: '请输入密码!' }]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item {...tailLayout} name="remember" valuePropName="checked">
							<Checkbox>记住账号</Checkbox>
						</Form.Item>

						<Form.Item {...tailLayout}>
							<Button type="primary" htmlType="submit">
								登录
							</Button>
						</Form.Item>
					</Form>
				</div>

			</div>
		);
	}
}

export default withRouter(Login as any);