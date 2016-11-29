package org.carlosdlr;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class TestListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		System.out.println("Close some resources and configuration");
		System.out.println("Server stopped");
		
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		System.out.println("Load some resources and configuration");
		System.out.println("Server started");
		
	}


}
