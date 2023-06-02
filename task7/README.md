### TASK-7

Develop a server side application for an ecommerce platform including following features:

1. Implement user registration, authentication and profile management
   - Must include but not limited to : user info, profile picture, location coordinates
2. Implement 3 types of roles: Admin, Seller and Normal User
   - Admin : Can view all the users and manage users
   - Seller : Create a vendor account, manage account, add products and manage inventory
   - Normal Users : Can view products, purchase products, provide reviews to products
3. Implement role based authorization in every APIs
4. Create an API for searching products which must accept request parameters and perform proper filtering and sorting
   - Sorting based on published date, price, etc
   - Search from keywords

## API Documentation

### User Authentication

#### Register

Register a new user in the system

- Endpoint: `/api/auth/register`
- Method: `POST`
- Request Body:

```json
{
  "name": "John Doe",
  "email": "johndoe@email.com",
  "password": "password",
  "avatar": "avatar.png",
  "role": "user",
  "address": "address"
}
```

- Response:

```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjg1NTQ3MTg1LCJleHAiOjE2ODU1NTA3ODV9.hhsracHZxCmRCtBxbdT0n2YQp1-NTCEN0_93bdoKYkk"
}
```

#### Login

Authenticate a user and generate an access token

- Endpoint: `/api/auth/register`
- Method: `POST`
- Request Body:

```json
{
  "email": "johndoe@email.com",
  "password": "password"
}
```

- Response:

```json
{
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0fSwiaWF0IjoxNjg1NTQ4NzkyLCJleHAiOjE2ODU1NTIzOTJ9.22lZeESHsV8QhkKyi1ZmPy-W05OQxgPfIM9HEECjm2Q"
}
```

#### Profile

Retrieve user profile

- Endpoint: `/api/user/profile`
- Method: `GET`
- Headers: `Authorization: Bearer <access_token>`

- Response:

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@email.com",
    "avatar": "avatar.png",
    "role": "user",
    "address": "address"
  }
}
```

### Categories

#### Get all categories

Retrieve a list of all categories

- Endpoint: `/api/categories`
- Method: `GET`

- Response:

```json
{
  "categories": [
    {
      "id": 5,
      "name": "Accessories",
      "createdAt": "2023-06-01T12:10:52.617Z",
      "updatedAt": "2023-06-01T12:10:52.617Z",
      "products": [
        {
          "id": 1,
          "name": "G-shock",
          "price": "69.00",
          "description": "wathch is important",
          "categoryId": 5,
          "createdAt": "2023-06-02T10:04:12.719Z",
          "updatedAt": "2023-06-02T10:04:12.719Z"
        }
      ]
    }
  ]
}
```

#### Create category

Create a new category

- Endpoint: `/api/categories`
- Method: `POST`
- Headers: `Authorization: Bearer <access_token>`
- Body:

```json
{
  "name": "Accessories"
}
```

- Response:

```json
{
  "message": "Category created successfully!"
}
```

#### Get category

Get category by id

- Endpoint: `/api/categories/:id`
- Method: `GET`
- Headers: `Authorization: Bearer <access_token>`
- Example:`/api/categories/4`

- Response:

```json
{
  "category": {
    "id": 4,
    "name": "Accessories",
    "createdAt": "2023-06-01T03:43:54.047Z",
    "updatedAt": "2023-06-01T03:43:54.047Z"
  }
}
```

#### Update category

Update category details

- Endpoint: `/api/categories/:id`
- Method: `PATCH`
- Headers: `Authorization: Bearer <access_token>`
- Example:`/api/categories/4`
- Body:

```json
{
  "name": "New Category"
}
```

- Response:

```json
{
  "message": "Category updated successfully!",
  "category": {
    "id": 4,
    "name": "New Category",
    "createdAt": "2023-06-01T03:43:54.047Z",
    "updatedAt": "2023-06-01T03:49:57.680Z"
  }
}
```

#### Delete category

Delete category

- Endpoint: `/api/categories/:id`
- Method: `DELETE`
- Headers: `Authorization: Bearer <access_token>`
- Example:`/api/categories/4`

- Response:

```json
{
  "message": "Category deleted successfully"
}
```

### Products

#### Get all products

Retrieve a list of all products

- Endpoint: `/api/products`
- Method: `GET`

- Response:

```json
{
  "products": [
    {
      "id": 1,
      "name": "G-shock",
      "price": "69.00",
      "description": "wathch is important",
      "categoryId": 5,
      "createdAt": "2023-06-02T10:04:12.719Z",
      "updatedAt": "2023-06-02T10:04:12.719Z",
      "category": {
        "id": 5,
        "name": "Accessories",
        "createdAt": "2023-06-01T12:10:52.617Z",
        "updatedAt": "2023-06-01T12:10:52.617Z"
      }
    }
  ]
}
```

#### Search products

Search products by name

- Endpoint: `/api/products/search`
- Method: `GET`
- Example: `/api/products/search?query=cool`

- Response:

```json
{
  "products": [
    {
      "id": 4,
      "name": "Cool Tee",
      "price": "69.69",
      "description": "A really cool tshirt is here",
      "createdAt": "2023-06-01T06:07:38.869Z",
      "updatedAt": "2023-06-01T10:21:21.393Z"
    }
  ]
}
```

#### Sort products

Search products by price

- Endpoint: `/api/products/sort`
- Method: `GET`
- Example:

  - `/api/products/sort?sortBy=createdAt`
  - `/api/products/sort?sortBy=price&sortOrder=desc`

- Response:

```json
{
  "products": [
    {
      "id": 5,
      "name": "bennie",
      "price": "100.00",
      "description": "press stud texured polo tshirt",
      "createdAt": "2023-06-01T11:54:49.362Z",
      "updatedAt": "2023-06-01T11:54:49.362Z"
    },
    {
      "id": 2,
      "name": "Basic Tee",
      "price": "69.69",
      "description": "A good tshirt",
      "createdAt": "2023-06-01T04:28:04.965Z",
      "updatedAt": "2023-06-01T04:28:04.965Z"
    },
    {
      "id": 4,
      "name": "Cool Tee",
      "price": "10.00",
      "description": "A really cool tshirt is here",
      "createdAt": "2023-06-01T06:07:38.869Z",
      "updatedAt": "2023-06-01T11:52:37.706Z"
    }
  ]
}
```

#### Create product

Create a new product

- Endpoint: `/api/products`
- Method: `POST`
- Headers: `Authorization: Bearer <access_token>`
- Body:

```json
{
  "name": "G-shock",
  "price": 69,
  "description": "wathch is important",
  "categoryId": 5
}
```

- Response:

```json
{
  "message": "Product created successfully!",
  "product": {
    "id": 1,
    "name": "G-shock",
    "price": "69.00",
    "description": "wathch is important",
    "categoryId": 5,
    "updatedAt": "2023-06-02T10:04:12.719Z",
    "createdAt": "2023-06-02T10:04:12.719Z"
  }
}
```

#### Get product

Get product by id

- Endpoint: `/api/products/:id`
- Method: `GET`
- Headers: `Authorization: Bearer <access_token>`
- Example:`/api/products/1`

- Response:

```json
{
  "product": {
    "id": 1,
    "name": "Basic Tee",
    "price": "69.69",
    "description": "A good tshirt",
    "createdAt": "2023-06-01T04:09:31.180Z",
    "updatedAt": "2023-06-01T04:09:31.180Z"
  }
}
```

#### Update product

Update product details

- Endpoint: `/api/products/:id`
- Method: `PATCH`
- Headers: `Authorization: Bearer <access_token>`
- Example:`/api/products/1`
- Body:

```json
{
  "name": "Cool Tee",
  "price": 69.69,
  "description": "A really cool tshirt"
}
```

- Response:

```json
{
  "message": "Product updated successfully!",
  "product": {
    "id": 1,
    "name": "Cool Tee",
    "price": 69.69,
    "description": "A really cool tshirt",
    "createdAt": "2023-06-01T04:09:31.180Z",
    "updatedAt": "2023-06-01T04:23:22.299Z"
  }
}
```

#### Delete product

Delete product

- Endpoint: `/api/products/:id`
- Method: `DELETE`
- Headers: `Authorization: Bearer <access_token>`
- Example:`/api/products/1`

- Response:

```json
{
  "message": "Product deleted successfully!"
}
```
