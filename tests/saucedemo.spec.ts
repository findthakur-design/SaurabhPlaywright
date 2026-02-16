import{test,expect} from'@playwright/test';
import { LoginPage } from './pages/loginpage';
import { testdata } from './pages/utils';
import { NetworkPage} from './pages/network';


test("Login to Sauce Demo", async ({page}) => {
    const networkPage = new NetworkPage(page);
    await networkPage.routeInventory();
    const loginPage = new LoginPage(page);
    await loginPage.launchUrl(process.env.BASE_URL || testdata.url);
    //  await loginPage.login(testdata.username, testdata.password);
     page.on('response', async (response) => {        
            const responseBody = await response.json();
            console.log('Inventory API Response:', responseBody);
        
    });
    // await loginPage.login(testdata.username, testdata.password);
    
});