Feature: Techfios bank and cash New Account Functionality 

@BankCashScenario
Scenario Outline: User should be able to login with valid credentials 
	and open a new account	
	Given User is on the techfios login page 
	When User enters the username as "<username>" 
	When User enters the password as "<password>"
	And  User clicks on"<login>"
	Then User should land on Dashboard page 
	And User clicks on"<bankCash>"
	And User clicks on"<newAccount>"
	Then User should land on Accounts page
	And User enters"<accountTitle>"in accounts page in AccountTitle 
	And User enters"<description>"in accounts page in description
	And User enters"<initialBalance>"in accounts page in initialBalance
	And User enters"<accountNumber>"in accounts page in accountNumber
	And User enters"<contactPerson>"in accounts page in contactPerson
	And User enters"<Phone>"in accounts page in phone
	And User enters"<internetBankingURL>"in accounts page in internetBankingURL
	And User clicks on"<submitnewAccount>"
	Then User should be able to validate account created successfully
	
	Examples:
	|username					|password |login|bankCash|newAccount|accountTitle	 |description|initialBalance|accountNumber|contactPerson|Phone			|accountTitle|internetBankingURL							|submitnewAccount|
	|demo@techfios.com|abc123		|login|bankCash|newAccount|Firsttitle 	 |sampledesc |1234567				|77645				|Habibo				|98765433254|titill			 |https://www.techfios.com				|submitnewAccount|
	|demo@techfios.com|abc123		|login|bankCash|newAccount|MyTitle12	   |samyondesc |9234567				|77645				|rainbo				|98765432254|titill			 |https://www.techfios.com				|submitnewAccount|