import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../../../../constants/paths';
import Modal from '../../../Modal';
import { Checkbox, CheckboxLabel, Form, FormButton, FormStack, Input, Label } from '../../../styles';
import { Title, Wrapper, FormNavigateLink, FormGroup } from './styles';

const LoginModal = ({ onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) return;

    setUsername('');
    setPassword('');
    onClose();
  };

  const handleNavigateToSignUp = () => {
    navigate(Paths.SIGN_UP);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <Wrapper onClick={(event) => event.stopPropagation()}>
        <Form onSubmit={handleSubmit}>
          <Title>{t('form.login')}</Title>
          <FormStack>
            <Label htmlFor="username"> {t('form.usernameLabel')}</Label>
            <Input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              name="username"
              placeholder={`${t('form.usernameLabel')}...`}
            />
          </FormStack>
          <FormStack>
            <Label htmlFor="password">{t('form.passwordLabel')}</Label>
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              name="password"
              placeholder={`${t('form.passwordLabel')}...`}
            />
          </FormStack>
          <FormGroup>
            <CheckboxLabel htmlFor="rememberMe">
              <Checkbox
                checked={isRememberMe}
                onChange={() => setIsRememberMe(!isRememberMe)}
                type="checkbox"
                name="rememberMe"
              />
              {t('form.rememberMeLabel')}
            </CheckboxLabel>

            <FormNavigateLink onClick={handleNavigateToSignUp}>{t('form.signUp')}</FormNavigateLink>
          </FormGroup>

          <FormButton disabled={!username || !password} type="submit">
            {t('form.login')}
          </FormButton>
        </Form>
      </Wrapper>
    </Modal>
  );
};

export default LoginModal;
