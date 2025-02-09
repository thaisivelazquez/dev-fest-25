# dev-fest-25

## setup
1) Clone the repository.
2) Create .env inside of `kitchen` folder
- `cd kitchen`
- `touch .env`

3) Set env variables
- Get a GEMINI API KEY: https://ai.google.dev/gemini-api/docs/api-key
    - Set `VITE_GEMINI_API_KEY` with above GEMINI api key
- Create programmable search engine:https://programmablesearchengine.google.com/controlpanel/all
    - Add `VITE_CUSTOM_SEARCH_JSON_API_KEY` and `VITE_SEARCH_ENGINE_ID`(Replace with your CSE ID, no quotes) to .env
## usage
1. Create virtual env `nodeenv env`
2. Activate virtual env `. env/bin/activate`
3. Navigate to project `cd kitchen`
4. Install dependencies with `npm install`.
5. Start the development server with `npm run dev`.
6. Navigate to: http://localhost:5173/
7. Deactivate virtual env `deactivate_node`