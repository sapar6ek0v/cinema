import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../../constants/paths';
import { Checkbox, Form, FormButton, FormStack, Input } from '../styles';
import { Wrapper, Title, SignUpLabel, SignUpCheckboxLabel } from './styles';

const SignUpForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreeWithPrivacy, setIsAgreeWithPrivacy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) return;

    setUsername('');
    setPassword('');
    navigate(Paths.MAIN);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>{t('form.signUp')}</Title>
        <FormStack>
          <SignUpLabel htmlFor="username"> {t('form.usernameLabel')}</SignUpLabel>
          <Input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="username"
            placeholder={`${t('form.usernameLabel')}...`}
          />
        </FormStack>
        <FormStack>
          <SignUpLabel htmlFor="password">{t('form.passwordLabel')}</SignUpLabel>
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder={`${t('form.passwordLabel')}...`}
          />
        </FormStack>
        <SignUpCheckboxLabel htmlFor="privacy">
          <Checkbox
            checked={isAgreeWithPrivacy}
            onChange={() => setIsAgreeWithPrivacy(!isAgreeWithPrivacy)}
            type="checkbox"
            name="privacy"
          />
          {t('form.privacy')}
        </SignUpCheckboxLabel>

        <FormButton disabled={!username || !password} type="submit">
          {t('form.signUp')}
        </FormButton>
      </Form>
    </Wrapper>
  );
};

export default SignUpForm;
