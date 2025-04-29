import { test, expect } from '@playwright/test';

import { RegisterPage } from '../../page/register'

test('test', async ({ page }) => {

  const Register = new RegisterPage(page)

  await Register.gotoRegisterPage()
  await page.pause()
  await Register.registerMethod('yeri', 'yeri@mailinator.com', 'Qwerty123!')

});