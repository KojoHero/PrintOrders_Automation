@COMMUNITY-553
@REQ_COMMUNITY-2
Feature: Marketplace

	#Tests As a business I want to be able to print all order for my accounting reporting
	#
	#Acceptance Criteria: 
	#
	## Print a report for all orders
	## Sort orders by time submitted
	@TEST_COMMUNITY-574 @REQ_COMMUNITY-435 @TESTSET_COMMUNITY-573
	Scenario: Verify if a business user can print a report
		Given User logs into account 
				And   User clicks on market and selects order        
				When  User clicks on the print button and confirms print     

