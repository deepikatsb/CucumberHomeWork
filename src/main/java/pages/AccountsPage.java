package pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountsPage extends TestBase {
	WebDriver driver;
	String insertedName;
	WebElement displayed_table;
	int countOfRows;
	String beforeXpath = "//tbody/tr[";
	String afterXpath = "]/td[1]";
	Boolean isInserted = false;

	public AccountsPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement accountTitleElement;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement descriptionElement;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement initialBalanceElement;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement accountNumberElement;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement contactPersonElement;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement contactPhoneElement;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement ibURLElement;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement SubmitElement;

	public String getTitleofAccountsPage() {
		return driver.getTitle();
	}

	public void enterAccountTitle(String data) {
		insertedName = data + generateRandomNumber(1000);
		accountTitleElement.sendKeys(insertedName);
	}

	public void enterDescription(String data) {
		descriptionElement.sendKeys(data);
	}

	public void enterInitialBalance(String data) {
		initialBalanceElement.sendKeys(data);
	}

	public void enterAccountNumber(String data) {
		data = "" + data + generateRandomNumber(100);
		accountNumberElement.sendKeys(data);
	}

	public void enterContactPerson(String data) {
		contactPersonElement.sendKeys(data);
	}

	public void enterContactPhone(String data) {
		contactPhoneElement.sendKeys(data);
	}

	public void enterIBURL(String data) {
		ibURLElement.sendKeys(data);
	}

	public void clickSubmitButton() {
		SubmitElement.click();
	}

	public Boolean validateSuccessfulInsertionofAccount() {

		//Counting number of rows by counting the number of <tr> tags in table
		displayed_table = driver.findElement(By.xpath("//table[@class='table table-striped table-bordered']"));
		List < WebElement > RowsInTable = displayed_table.findElements(By.tagName("tr"));
		countOfRows = RowsInTable.size();
		
		// Starting from last row because the name is getting inserted at the end
		for (int i = countOfRows; i >= 2; i++) {
			String nameFromList = driver.findElement(By.xpath(beforeXpath + i + afterXpath)).getText();
			if (insertedName.equals(nameFromList)) {
				System.out.println("Inserted name exists");
				isInserted = true;
				break;
			}
		}
		return isInserted;

	}

}
