run-backend:
	(cd app/ && ng serve) 
	
run-frontend:
	(cd backend/ && deno run --allow-read --allow-net --allow-write connect.ts)