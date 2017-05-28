package com.bhanu;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Factory;

import com.cucumber.CucumberFactoryBuilder;

import java.io.File;
import java.util.concurrent.TimeUnit;

/**
 * Unit test for simple App.
 */
public class TestFactory 
{
	protected WebDriver driver;

	 @Factory
	    public Object[] create() {
	        return new CucumberFactoryBuilder()
	                .addOption("--format", "html:target/cucumber")
	                .create(new File("src"));
	    }
    
	 @Given("^I am a  ([^\"]*) $")
	 public void I_am_a(String tester) 
	 {
	 	System.out.println("I_am_a "+tester+"");
	 }
	 
	 @When("^I go to work$")
	 public void I_go_to_work() {
	 	System.out.println("I go to  work");
	 }

	 @Then("^I ([^\"]*) $")
	 public void I(String wrkopt) {
	 	
	 	System.out.println("I "+wrkopt+"");
	 }

	 @And("^And My boss ([^\"]*) me $")
	 public void And_My_boss(String boss)
	 {
	 	System.out.println("And_My_boss "+boss+"");
	 }

	 @But("^But The developer ([^\"]*) me $")
	 public void But_The_developer(String dev)
	 {

	 	System.out.println("But The developer "+dev+"");
	 }

}
