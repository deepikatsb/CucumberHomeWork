package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {

	WebDriver driver;

	public DashboardPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.PARTIAL_LINK_TEXT, using = "Bank & Cash") WebElement bank_and_cash_element;
	@FindBy(how = How.PARTIAL_LINK_TEXT, using = "New Account") WebElement new_account_Element;
	
	
	
	public void clickBankAndCashElement() {
		bank_and_cash_element.click();
	}
	public void clickAddAccountElement() {
		new_account_Element.click();
	}
	
	public String getTitleofDashboardPage() {
		return driver.getTitle();
	}
	
}
