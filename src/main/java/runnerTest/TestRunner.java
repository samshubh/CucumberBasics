package runnerTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "C:\\Users\\vt1056.SRITADS\\eclipse-workspace\\CucumberTopics\\src\\main\\java\\feature\\DataDrivenMultipleExamplesKeyword.feature", //the path of the feature files
			glue={"stepdefinition"}  //the path of the step definition files
			,format= {"pretty","html:test-output","json:json_report/Kipos_json","junit:xml_report/kipos_xml"}
			,dryRun= false
			,monochrome=true
//			,strict=false
			
				
			)
	 
	public class TestRunner {
	 
	}