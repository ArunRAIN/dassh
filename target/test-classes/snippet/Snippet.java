package snippet;

public class Snippet {
	 @Factory
	    public Object[] create() {
	        return new CucumberFactoryBuilder()
	                .addOption("--format", "html:target/cucumber")
	                .create(new File("src"));
	    }
	
	    
}

