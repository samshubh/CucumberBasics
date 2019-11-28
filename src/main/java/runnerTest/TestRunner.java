package runnerTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "C:\\Users\\vt1056.SRITADS\\eclipse-workspace\\CucumberTopics\\src\\main\\java\\feature\\login.feature", //the path of the feature files
			glue={"stepdefinition"}
			,format= {"pretty","html:test-outout"}//the path of the step definition files
				
			)
	 
	public class TestRunner {
	 
	}