//Name = ZUBAIYER KARIM LABIB
//ID = 18037966

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import com.google.gson.Gson;

public class RecipeWS extends HttpServlet
{
	RecipeDSC recipeDSC = new RecipeDSC();

	/*	To get one recipe (by id) or all recipes
	*/
	public void doGet(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
		try
		{
			//	Optional: Get request content type if we want to check
			String requestContentType = request.getContentType();
			System.out.println(">>> request content type: " + requestContentType);

			// Optional: Get request method if we want to check
			String requestMethod = request.getMethod();
			System.out.println(">>> request method: " + requestMethod);

			// Get id
			String id = request.getParameter("id");
			System.out.println(">>> id: " + id);
			
			int recipeID;
			
			if(id != null)
			{
				recipeID = Integer.parseInt(id);
			}
			else{
				recipeID = 0;
			}
			
			//int recipeID = Integer.parseInt(id);


			//	Get method is used to find one product or all products
			if (recipeID > 0)	// to find one product
			{
				Recipe recipe = recipeDSC.find(recipeID);

				response.setContentType("application/json");
				PrintWriter out = response.getWriter();
				out.print( Helper.getJSON(recipe));
			}
			else
			//	Get method to get all products
			{
				List<Recipe> recipes = recipeDSC.findAll();

				response.setContentType("application/json");
				PrintWriter out = response.getWriter();
				out.print(Helper.getJSONList(recipes, Recipe.class));
			}

		}
		catch(Exception e)
		{
			throw new RuntimeException(e);
		}
		// TODO
		// TODO
	}

	/*	To add a recipe
	*/
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
		try
		{
			//	Get request content type
			String requestContentType = request.getContentType();
			System.out.println(">>> request content type: " + requestContentType);

			// Get request method
			String requestMethod = request.getMethod();
			System.out.println(">>> request method: " + requestMethod);

			// Get id
			//String id = request.getParameter("id");
			//System.out.println(">>> id: " + id);

			// Get data
			BufferedReader in = request.getReader();
			StringBuffer dataSB = new StringBuffer();
			String line = in.readLine();
			while(line != null)
			{
				dataSB.append(line).append("\n");
				line = in.readLine();
			}
			String data = dataSB.toString();
			System.out.println(">>> data:\n*" + data +"*");

			// Convert Json to Product
			Recipe recipe = Helper.getObject(data, Recipe.class);

			recipeDSC.add(recipe);

			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			out.print(data);
		}
		catch(Exception e)
		{
			response.sendError(800, e.getMessage());
		}
		// TODO
	}

	/*	To upadate a recipe
	*/
	public void doPut(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
		try
		{
			//	Get request content type
			String requestContentType = request.getContentType();
			System.out.println(">>> request content type: " + requestContentType);

			// Get request method
			String requestMethod = request.getMethod();
			System.out.println(">>> request method: " + requestMethod);

			// Get id
			String id = request.getParameter("id");
			System.out.println(">>> id: " + id);

			// Get data
			BufferedReader in = request.getReader();
			StringBuffer dataSB = new StringBuffer();
			String line = in.readLine();
			while(line != null)
			{
				dataSB.append(line).append("\n");
				line = in.readLine();
			}
			String data = dataSB.toString();
			System.out.println(">>> data:\n*" + data +"*");

			// Convert Json to Product
			Recipe recipe = Helper.getObject(data, Recipe.class);
			recipeDSC.update(recipe);

			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			out.print(data);
		}
		catch(Exception e)
		{
			response.sendError(800, e.getMessage());
		}
		
		// TODO

	}// doPut


	// To delete a product
	//
	public void doDelete(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException
	{
		try
		{
			//	Get request content type
			String requestContentType = request.getContentType();
			System.out.println(">>> request content type: " + requestContentType);

			// Get request method
			String requestMethod = request.getMethod();
			System.out.println(">>> request method: " + requestMethod);

			// Get id
			String id = request.getParameter("id");
			System.out.println(">>> id: " + id);
			int recipeID;
			
			if(id != null)
			{
				recipeID = Integer.parseInt(id);
			}
			else{
				recipeID = 0;
			}

			//	This doDelete method is called when we have a DELETE request
			// Hence, we go ahead with the request and remove the product
			recipeDSC.delete(recipeID);

			// We do not send back any data

		}
		catch(Exception e)
		{
			response.sendError(800, e.getMessage());
		}
		// TODO
	}
}

