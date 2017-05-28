package com.bhanu;

import java.io.File;

import org.testng.annotations.Factory;

import com.cucumber.CucumberFactoryBuilder;

public class Runner 
{
	
	 @Factory
	    public Object[] create() {
	        return new CucumberFactoryBuilder()
	                .addOption("--format", "html:target/cucumber")
	                .create(new File("src"));
	    }

	    

}
