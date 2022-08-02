package steps;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AccountsPage;
import pages.DashboardPage;
import pages.Loginpage;
import pages.TestBase;

public class LoginstepDefinition extends TestBase {

	Loginpage loginpage;
	DashboardPage dashboardPage;
	AccountsPage accountsPage;
	String DashboardPageTitle = "Dashboard- iBilling";
	String AccountsPageTitle = "Accounts- iBilling";
	String insertedName;

	@Before
	public void initmethod() {
		initDriver();
		loginpage = PageFactory.initElements(driver, Loginpage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		accountsPage = PageFactory.initElements(driver, AccountsPage.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@When("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String data) {

		loginpage.enterUserName(data);
	}

	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String data) {
		loginpage.enterPassword(data);
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		Assert.assertEquals(dashboardPage.getTitleofDashboardPage(), DashboardPageTitle, "DashBoardPage NOT AVAILABLE");
	}

	@When("^User clicks on\"([^\"]*)\"$")
	public void user_clicks_on(String columnName) {
		switch (columnName) {
		case "login":
			loginpage.clickSignInButton();
			break;
		case "bankCash":
			dashboardPage.clickBankAndCashElement();
			break;
		case "newAccount":
			dashboardPage.clickAddAccountElement();
			break;
		case "submitnewAccount":
			accountsPage.clickSubmitButton();
			break;
		default:
			System.out.println("Invalid option found");
		}
	}

	@Then("^User should land on Accounts page$")
	public void user_should_land_on_Accounts_page() {
		Assert.assertEquals(accountsPage.getTitleofAccountsPage(), AccountsPageTitle, "Accounts NOT AVAILABLE");
	}

	@Then("^User enters\"([^\"]*)\"in accounts page in AccountTitle$")
	public void user_enters_accountTitle_in_accounts_page(String accountTitle) {
		accountsPage.enterAccountTitle(accountTitle);
	}

	@Then("^User enters\"([^\"]*)\"in accounts page in description$")
	public void user_enters_description_in_accounts_page(String description) {
		accountsPage.enterDescription(description);
	}

	@Then("^User enters\"([^\"]*)\"in accounts page in initialBalance$")
	public void user_enters_initialBalance_in_accounts_page(String initialBalance) {
		accountsPage.enterInitialBalance(initialBalance);
	}

	@Then("^User enters\"([^\"]*)\"in accounts page in accountNumber$")
	public void user_enters_accountNumber_in_accounts_page(String accountNumber) {
		
		accountsPage.enterAccountNumber(accountNumber);
	}

	@Then("^User enters\"([^\"]*)\"in accounts page in contactPerson$")
	public void user_enters_contactPerson_in_accounts_page(String contactPerson) {
		accountsPage.enterContactPerson(contactPerson);
	}

	@Then("^User enters\"([^\"]*)\"in accounts page in phone$")
	public void user_enters_phone_in_accounts_page(String phone) {
		accountsPage.enterContactPhone(phone);
	}

	@Then("^User enters\"([^\"]*)\"in accounts page in internetBankingURL$")
	public void user_enters_internetBankingURL_in_accounts_page(String internetBankingURL) {
		accountsPage.enterIBURL(internetBankingURL);
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		Assert.assertTrue(accountsPage.validateSuccessfulInsertionofAccount(), "Account not created");
	}
	@After
	public void tearDown()
	{
		driver.close();
		driver.quit();
	}

}
