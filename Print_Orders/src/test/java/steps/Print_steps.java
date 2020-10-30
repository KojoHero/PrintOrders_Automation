package steps;


	import java.util.concurrent.TimeUnit;

	import org.openqa.selenium.By;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

	import cucumber.api.java.After;
	import cucumber.api.java.Before;
	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.When;

	public class Print_steps {

		WebDriver driver;

		@Before()
		public void setup() {
			System.setProperty("webdriver.chrome.driver", "F:\\Print Orders\\Print_Orders\\src\\test\\java\\resources\\chromedriver.exe");
			this.driver = new ChromeDriver();
			this.driver.manage().window().maximize();
			this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);

		}

		@After()
		public void end() {
			driver.manage().deleteAllCookies();
			driver.quit();
		}
		
		@Given("^User logs into account$")
		public void user_logs_into_account() throws Throwable {
			driver.get("http://20.52.44.20/auth/login");
			Thread.sleep(5000);
			driver.findElement(By.id("InputEmail")).sendKeys("testing.amalitech@gmail.com");
			driver.findElement(By.id("InputPassword1")).sendKeys("12345678!Aa");
			driver.findElement(By.id("signin_button")).click();
		}

		@Given("^User clicks on market and selects order$")
		public void user_clicks_on_market_and_selects_order() throws Throwable {

			Thread.sleep(5000);
			driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[1]/div/div/div[2]/div[1]/a")).click(); //clicks market
			Thread.sleep(5000);
			driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[1]/div/div/div[2]/div[1]/div/a[3]")).click(); //clicks order
		}

		@When("^User clicks on the print button and confirms print$")
		public void user_clicks_on_the_print_button_and_confirms_print() throws Throwable {
			Thread.sleep(5000);
			driver.findElement(By.id("download-btn")).click(); //clicks print button
		}

	
}
