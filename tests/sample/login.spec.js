import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/login'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await page.pause()
  await Login.loginMethod('zhouyeah', 'Qwerty123!')

});