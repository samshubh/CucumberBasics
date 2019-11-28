package stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.java.en.Given;
import junit.framework.Assert;

public class StepDefiniton {
	
	 WebDriver driver;
	
	
	  @Given("^user is already on landing page$")
        public void user_is_already_on_landing_page() throws InterruptedException
	  {

			System.setProperty("webdriver.chrome.driver", "C:\\Users\\vt1056.SRITADS\\Downloads\\chromedriver_win32\\chromedriver.exe");	
			driver = new ChromeDriver(); 
			
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			
			driver.get("https://www.kiposcollective.com/#/");
			
		
	  }
	  
	  
	  @When("^title of the page is Kipos Collective$")
	  public void title_of_the_page_is_Kipos_Collective() {
	      
		 String title =  driver.getTitle();
		 
		 System.out.println(title);
		 Assert.assertEquals("Kipos Collective", title);
		  
	      
	  }

	  @Then("^user clicks on login button$")
	  public void user_clicks_on_login_button() throws InterruptedException  {
	     
		  driver.findElement(By.xpath("//div[@class='col-lg-4 col-xl-4 col-md-5 col-sm-4 col-8 sign-right order-aline-2 ng-scope']//span[@class='btn btn-sign'][contains(text(),'Login')]")).click();
	       Thread.sleep(4000);
	  }

	  @Then("^user enters email and password$")
	  public void user_enters_email_and_password() throws InterruptedException {
		  
		  driver.findElement(By.xpath("//input[@id='email']")).sendKeys("prashanth.burri@srijaytech.com");
		  Thread.sleep(4000);
		  
		  driver.findElement(By.xpath("//input[@id='password_login']")).sendKeys("welcome123");
		  Thread.sleep(4000);
	  }


	  @Then("^user clicks on submit button$")
	  public void user_clicks_on_submit_button() throws InterruptedException  {
	  driver.findElement(By.xpath("//form[@id='vm.frmLogin']//button[contains(@class,'pull-right btn-action btn btn-cart btn-kipos')][contains(text(),'Submit')]")).click();
	  
	     Thread.sleep(3000);
	      
	  }

	  @Then("^close the browser$")
	  public void close_the_browser() {
         
		  driver.quit();
	  }



}
