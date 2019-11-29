
package stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginUsingExamplesKeyword {
	
	WebDriver driver;

		@Given("^user in landing page$")
		public void user_in_landing_page() throws InterruptedException {
			
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\vt1056.SRITADS\\Downloads\\chromedriver_win32\\chromedriver.exe");	
			driver = new ChromeDriver(); 
			
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			
			driver.get("https://www.kiposcollective.com/#/");
			Thread.sleep(4000);
		    
		}
		
		@When("^title is Kipos Collective$")
		public void title_is_Kipos_Collective()  {
		    
			String title = driver.getTitle();

			System.out.println(title);
			Assert.assertEquals("Kipos Collective", title);
		}
		
		@Then("^click on login button$")
		public void click_on_login_button() throws InterruptedException{
		    
			 driver.findElement(By.xpath("//div[@class='col-lg-4 col-xl-4 col-md-5 col-sm-4 col-8 sign-right order-aline-2 ng-scope']//span[@class='btn btn-sign'][contains(text(),'Login')]")).click();
		       Thread.sleep(4000);
		}
		
		@Then("^user enter the login details \"(.*)\" and \"(.*)\"$")
		public void user_enter_the_login_details_and(String email, String password) throws InterruptedException  {
			driver.findElement(By.xpath("//input[@id='email']")).sendKeys(email);
			  Thread.sleep(4000);
			  
			  driver.findElement(By.xpath("//input[@id='password_login']")).sendKeys(password);
			  Thread.sleep(4000);
		    
		}
		
		@Then("^click on submit button$")
		public void click_on_submit_button() throws InterruptedException {
		    
			driver.findElement(By.xpath("//form[@id='vm.frmLogin']//button[contains(@class,'pull-right btn-action btn btn-cart btn-kipos')][contains(text(),'Submit')]")).click();
			  
		     Thread.sleep(3000);
		}

		@Then("^close the current browser$")
		public void close_the_current_browser()  {
			 driver.quit();
		   
		}


}
