import React from 'react';
import TextInput from '../common/TextInput';

const LoginForm = ({onSave, onChange}) => {
  return (
    <form>
      <TextInput
        name="email"
        type="email"
        label="邮箱"
        placeholder="邮箱"
        onChange={onChange}
        style="width:50%"
      />


      <TextInput
        name="password"
        type="password"
        label="密码"
        placeholder="密码"
        onChange={onChange}/>

      <input
        type="submit"
        className="btn btn-primary"
        value="登录"
        onClick={onSave}/>
    </form>
  );
};

LoginForm.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default LoginForm;
