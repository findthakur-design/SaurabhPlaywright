import{test,expect} from'@playwright/test';
import { LoginPage } from './pages/loginpage';
import { testdata } from './pages/utils';
test("Login to Sauce Demo", async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.launchUrl(testdata.url);
    await loginPage.login(testdata.username, testdata.password);
});