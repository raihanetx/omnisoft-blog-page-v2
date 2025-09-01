
import React from 'react';
import CodeBlock from '../CodeBlock';

const BLOG_CONTENT: Record<number, React.ReactNode> = {
    1: (
        <>
            <p className="text-lg leading-relaxed mb-6">
                React has fundamentally changed the way we build web applications. It's a powerful JavaScript library for creating user interfaces with a component-based architecture. If you're new to the ecosystem, getting started can feel daunting, but the core concepts are surprisingly straightforward. In this post, we'llwalk through the absolute basics to get you up and running.
            </p>

            <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4">1. The Component Model</h2>
                <p className="leading-loose mb-6">
                    Everything in React is a component. Think of components as custom, reusable HTML elements. They can be simple, like a button, or complex, like an entire page. We typically write components as JavaScript functions that return something that looks like HTML. This "HTML-in-JS" syntax is called JSX (JavaScript XML).
                </p>
                <p className="leading-loose mb-6">Here's what a basic functional component looks like:</p>
                <CodeBlock>
{`import React from 'react';

// This is a functional component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// You can then use it in other components like a regular HTML tag:
// <Welcome />`}
                </CodeBlock>
            </div>
            
            <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4">2. Props: Passing Data</h2>
                <p className="leading-loose mb-6">
                    Components are most useful when they're dynamic. 'Props' (short for properties) let us pass data into our components, similar to HTML attributes. This allows us to reuse a component with different data.
                </p>
                 <p className="leading-loose mb-6">
                    Let's modify our \`Welcome\` component to accept a \`name\` prop.
                </p>
                <CodeBlock>
{`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Now we can reuse it with different names:
// <Welcome name="Alex" />
// <Welcome name="Samantha" />`}
                </CodeBlock>
            </div>
            
             <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4">3. State: Managing Component Memory</h2>
                <p className="leading-loose mb-6">
                    What about data that changes over time, like a user typing into a form or a counter? For this, we use 'state'. State is data that is managed *within* a component. When a component's state changes, React automatically re-renders the component to reflect the new data.
                </p>
                 <p className="leading-loose mb-6">
                    The most common way to manage state in a functional component is with the \`useState\` hook.
                </p>
                <CodeBlock>
{`import React, { useState } from 'react';

function Counter() {
  // 'count' is our state variable. 'setCount' is the function to update it.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
                </CodeBlock>
                 <p className="leading-loose mt-6">
                    With just components, props, and state, you have the foundational knowledge to build a vast range of interactive UIs. Happy coding!
                </p>
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-4">Sources</h2>
                 <div className="flex items-center gap-3">
                    <span className="bg-[#865dff] text-white text-sm font-medium px-4 py-1.5 rounded-full">React Docs</span>
                    <span className="bg-[#865dff] text-white text-sm font-medium px-4 py-1.5 rounded-full">MDN Web Docs</span>
                </div>
            </div>
        </>
    ),
    2: (
        <>
            <p className="text-lg leading-relaxed mb-6">TypeScript, a superset of JavaScript, adds static types to the language, enabling developers to catch errors early and build more robust applications. As you get comfortable with the basics, you'll discover a powerful set of advanced patterns that can make your code even more flexible and type-safe. Let's explore a few of them.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Mapped Types</h3>
            <p className="leading-loose mb-6">Mapped types are a powerful feature that lets you take an existing type and transform each of its properties. This is incredibly useful for creating variations of a type. The syntax is reminiscent of a \`for...in\` loop in JavaScript.</p>
            <p className="leading-loose mb-6">Here’s how you could create a type that makes all properties of another type \`readonly\`:</p>
            <CodeBlock>
{`// A generic Readonly type
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

interface User {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "John Doe",
    age: 30,
};

// This will cause a compile-time error
// user.age = 31;`}
            </CodeBlock>
            <h3 className="text-3xl font-bold mt-8 mb-4">Conditional Types</h3>
            <p className="leading-loose mb-6">Conditional types allow you to choose types based on a condition. They take a form that looks a lot like conditional expressions (<code>condition ? trueExpression : falseExpression</code>) in JavaScript. They are extremely powerful for creating flexible and intelligent type definitions.</p>
             <CodeBlock>
{`interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

// A conditional type that checks if T extends Animal
type IsAnimal<T> = T extends Animal ? "yes" : "no";

type Result1 = IsAnimal<Dog>;    // type is "yes"
type Result2 = IsAnimal<string>; // type is "no"`}
            </CodeBlock>
            <blockquote className="my-6 border-l-4 border-button-secondary pl-4 italic text-gray-400">
                Mastering these advanced patterns will unlock a new level of productivity and safety in your TypeScript projects, allowing you to build complex type definitions that are both expressive and maintainable.
            </blockquote>
            <p className="leading-loose mb-6">By combining these patterns, you can create highly sophisticated types that accurately model the data structures in your application, leading to fewer bugs and a better developer experience.</p>
        </>
    ),
    3: (
        <>
            <p className="text-lg leading-relaxed mb-6">Tailwind CSS has taken the front-end world by storm by offering a utility-first approach to styling. Instead of writing custom CSS classes, you build designs directly in your HTML by applying pre-existing utility classes. This approach can dramatically speed up development and help maintain consistency across your project.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Thinking in Utilities</h3>
            <p className="leading-loose mb-6">The core shift with Tailwind is moving away from "semantic" class names like <code>.article-card</code> or <code>.primary-button</code>. Instead, you compose styles using low-level utility classes. Let's see how simple it is to style a button.</p>
            <CodeBlock>
{`<!-- Instead of this... -->
<button class="btn btn-primary">Click Me</button>

<!-- You do this... -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>`}
            </CodeBlock>
             <p className="leading-loose my-6">At first, this can feel verbose, but it has huge benefits. You aren't constantly inventing class names, and all the styling is co-located with the HTML, making components easier to read and maintain.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Responsive Design Made Easy</h3>
            <p className="leading-loose mb-6">Tailwind makes responsive design intuitive. You can apply utility classes conditionally at different screen sizes by prefixing them with breakpoint names like \`sm:\`, \`md:\`, \`lg:\`, and \`xl:\`. This makes it easy to build complex responsive layouts without ever leaving your HTML.</p>
            <p className="leading-loose mb-6">Here’s an example of a card that is vertical on mobile and horizontal on medium screens and up:</p>
            <CodeBlock>
{/* FIX: Corrected a syntax error where backslashes were improperly escaping the template literal, causing parsing errors. */}
{`<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="..." alt="A cool image">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work.</p>
    </div>
  </div>
</div>`}
            </CodeBlock>
            <p className="leading-loose mt-6">By embracing a utility-first workflow, you can build custom designs without writing a single line of custom CSS, leading to a faster and more maintainable development process.</p>
        </>
    ),
    5: (
        <>
            <p className="text-lg leading-relaxed mb-6">Node.js, with its event-driven, non-blocking I/O model, is perfectly suited for building fast and scalable network applications. When combined with the minimalist and flexible Express.js framework, creating robust REST APIs becomes a straightforward and enjoyable process. This article will guide you through setting up a basic Express server and defining routes.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Setting Up Your First Server</h3>
            <p className="leading-loose mb-6">Getting a server running with Express requires just a few lines of code. You'll need to import the express module, create an app instance, define a route, and tell your app to listen on a specific port.</p>
            <CodeBlock>
{`const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}
            </CodeBlock>
            <h3 className="text-3xl font-bold mt-8 mb-4">Defining Routes for a REST API</h3>
            <p className="leading-loose mb-6">Routes determine how your application responds to a client request to a particular endpoint. For a REST API, you'll typically define routes for different HTTP methods like GET, POST, PUT, and DELETE to handle CRUD (Create, Read, Update, Delete) operations.</p>
            <p className="leading-loose mb-6">Let's create a simple in-memory array of users and some endpoints to manage them.</p>
            <CodeBlock>
{`let users = [
  { id: 1, name: 'Alex Morgan' },
  { id: 2, name: 'Jane Smith' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a single user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found.');
  res.json(user);
});

// POST a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});`}
            </CodeBlock>
            <p className="leading-loose mt-6">This simple foundation is all you need to start building powerful APIs that can serve a wide range of clients, from web browsers to mobile applications. From here, you can explore connecting to a database, adding authentication, and more.</p>
        </>
    ),
    6: (
        <>
            <p className="text-lg leading-relaxed mb-6">As applications grow in complexity, the traditional monolithic architecture can become a bottleneck, slowing down development and deployment cycles. Microservices offer a solution by breaking down a large application into a collection of smaller, independently deployable services. Each service is built around a specific business capability and can be developed, deployed, and scaled independently.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Key Benefits of Microservices</h3>
            <p className="leading-loose mb-6">Adopting a microservices architecture can provide several advantages:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Improved Scalability:</strong> Services can be scaled independently. If your payment processing service is under heavy load, you can scale just that service without touching the user profile service.</li>
                <li><strong>Increased Resilience:</strong> If one service fails, the rest of the application can continue to function. A crash in the recommendation engine shouldn't bring down the entire e-commerce site.</li>
                <li><strong>Technology Flexibility:</strong> Each service can be built with the technology stack that is best suited for its job. The user service could be a Node.js API, while a machine learning service could be written in Python.</li>
                <li><strong>Faster Development Cycles:</strong> Smaller, focused teams can work on different services in parallel. A team can update and deploy their service without needing to coordinate a large-scale release with the entire organization.</li>
            </ul>
            <h3 className="text-3xl font-bold mt-8 mb-4">The Challenges to Consider</h3>
            <p className="leading-loose mb-6">However, microservices are not a silver bullet. They introduce their own set of challenges:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                 <li><strong>Operational Complexity:</strong> You go from managing one application to managing many. This requires mature DevOps practices for deployment, monitoring, and logging.</li>
                 <li><strong>Network Latency:</strong> Communication between services happens over the network, which is slower and less reliable than in-process calls within a monolith.</li>
                 <li><strong>Data Consistency:</strong> Maintaining data consistency across multiple services can be very challenging and often requires adopting patterns like eventual consistency.</li>
            </ul>
            <blockquote>The core idea is to create a system where components are independently replaceable and upgradeable, which is crucial for building and maintaining large, complex applications over time.</blockquote>
            <p className="leading-loose mt-6">Choosing microservices is a significant architectural decision with major trade-offs. It's essential to weigh the benefits of scalability and flexibility against the increased operational complexity before diving in.</p>
        </>
    ),
    7: (
        <>
            <p className="text-lg leading-relaxed mb-6">NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses modern JavaScript, is built with and fully supports TypeScript, and combines elements of OOP, FP, and FRP. One of its most powerful features is its first-class support for building GraphQL APIs using a code-first approach.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Code-First GraphQL</h3>
            <p className="leading-loose mb-6">With the code-first approach, you use decorators and TypeScript classes to generate the GraphQL schema on the fly. This means you only have one source of truth—your code—and you get the benefits of type safety between your resolvers and your schema automatically.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Building a GraphQL Resolver</h3>
            <p className="leading-loose mb-6">In GraphQL, a "resolver" is a function that's responsible for fetching the data for a single field. NestJS makes creating resolvers elegant and declarative using decorators. Below is an example of a simple resolver that queries for a list of authors.</p>
            <CodeBlock>
{`// author.model.ts
@ObjectType()
export class Author {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;
}

// author.resolver.ts
@Resolver(of => Author)
export class AuthorResolver {
  
  // A sample service to provide data
  constructor(private authorsService: AuthorsService) {}
  
  @Query(returns => [Author])
  async authors() {
    return this.authorsService.findAll();
  }
}

// To complete this, you would create an AuthorsService
// that has a findAll method to fetch your data.`}
            </CodeBlock>
            <p className="leading-loose mt-6">This code-first approach, powered by decorators, not only streamlines the development of GraphQL APIs but also ensures they are robust and easy to maintain. NestJS provides a solid foundation for building complex, enterprise-ready applications.</p>
        </>
    ),
    8: (
        <>
            <p className="text-lg leading-relaxed mb-6">In the world of React state management, libraries like Redux and MobX have traditionally dominated. However, they often come with significant boilerplate and complexity. Zustand emerges as a breath of fresh air—a small, fast, and scalable state-management solution that leverages the power of React hooks to provide a minimal and intuitive API.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">The Core Idea: A Centralized Store</h3>
            <p className="leading-loose mb-6">Zustand's philosophy is simple: state is a single, centralized object. You create a "store" which is essentially a hook. Components can then subscribe to parts of this state, and they will only re-render when the data they are listening to changes. This selective re-rendering is a key performance benefit.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Creating Your First Store</h3>
            <p className="leading-loose mb-6">Creating a store is incredibly straightforward. You import the \`create\` function from Zustand, define your state and the actions that can modify it, and export the resulting hook.</p>
            <CodeBlock>
{`import create from 'zustand';

// Define the store
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;`}
            </CodeBlock>
            <h3 className="text-3xl font-bold mt-8 mb-4">Using the Store in a Component</h3>
            <p className="leading-loose mb-6">To use the store, you simply call the hook you created. You can select the entire state or just the pieces you need.</p>
            <CodeBlock>
{`import React from 'react';
import useCounterStore from './useCounterStore';

function CounterComponent() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}`}
            </CodeBlock>
            <p className="leading-loose mt-6">Zustand proves that powerful state management doesn't need to be complicated. Its minimal API and hook-based approach make it a joy to work with, allowing you to manage your application's state with very little code and a great developer experience.</p>
        </>
    ),
    9: (
        <>
            <p className="text-lg leading-relaxed mb-6">Static user interfaces can feel lifeless. Animations, when used thoughtfully, can guide the user's attention, provide feedback, and create a more engaging and delightful experience. Framer Motion is a production-ready motion library for React that makes adding animations simple and powerful, whether you're building a simple button transition or a complex, orchestrated animation sequence.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">The \`motion\` Component</h3>
            <p className="leading-loose mb-6">The core of Framer Motion is the \`motion\` component. You can turn any HTML or SVG element into a motion component by prefixing it with \`motion.\`. For example, a \`div\` becomes a \`motion.div\`. These components can then be animated using props.</p>
            <CodeBlock>
{`import { motion } from 'framer-motion';

function MyComponent() {
  return (
    <motion.div
      animate={{ x: 100, rotate: 360 }}
      transition={{ duration: 2 }}
    />
  );
}`}
            </CodeBlock>
            <h3 className="text-3xl font-bold mt-8 mb-4">Variants for Reusable Animations</h3>
            <p className="leading-loose mb-6">For more complex or reusable animations, Framer Motion offers "variants". Variants are pre-defined sets of properties that you can apply to a component. This helps keep your animation logic clean and separate from your component's styling.</p>
            <CodeBlock>
{`const listVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Animate children with a delay
    }
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function MyList() {
  return (
    <motion.ul variants={listVariants} initial="hidden" animate="visible">
      <motion.li variants={itemVariants}>Item 1</motion.li>
      <motion.li variants={itemVariants}>Item 2</motion.li>
      <motion.li variants={itemVariants}>Item 3</motion.li>
    </motion.ul>
  );
}`}
            </CodeBlock>
            <p className="leading-loose mt-6">This example creates a beautiful staggered animation where list items fade in one after another. With Framer Motion's declarative API, you can bring your React apps to life with expressive and performant animations, enhancing the overall user experience.</p>
        </>
    ),
    10: (
        <>
            <p className="text-lg leading-relaxed mb-6">While frameworks like React and Vue have dominated the front-end landscape, Svelte offers a fundamentally different approach. Instead of shipping a runtime library to the browser to do its work, Svelte is a compiler that converts your components into highly efficient, imperative JavaScript code at build time. SvelteKit is the official application framework built on top of Svelte, providing a complete solution for building robust web apps with features like server-side rendering, routing, and code-splitting.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Filesystem-based Routing</h3>
            <p className="leading-loose mb-6">SvelteKit uses a filesystem-based router. The structure of your \`src/routes\` directory defines the routes of your application. For example, \`src/routes/about/+page.svelte\` will create an \`/about\` page.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Loading Data</h3>
            <p className="leading-loose mb-6">To load data for a page, you create a \`+page.js\` or \`+page.server.js\` file alongside your \`+page.svelte\` file. The \`server\` version runs only on the server, which is perfect for fetching data from a database or a private API. The data returned from the \`load\` function is automatically available to your page component.</p>
            <CodeBlock>
{`// src/routes/blog/+page.server.js
// This code runs ONLY on the server.

export async function load({ fetch }) {
  // Fetch posts from an API
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();
  
  return { posts };
}`}
            </CodeBlock>
            <p className="leading-loose my-6">This data can then be used in the corresponding page component:</p>
            <CodeBlock>
{`<!-- src/routes/blog/+page.svelte -->
<script>
  export let data; // Data from the load function
</script>

<h1>Blog Posts</h1>
<ul>
  {#each data.posts as post}
    <li><a href="/blog/{post.slug}">{post.title}</a></li>
  {/each}
</ul>`}
            </CodeBlock>
            <p className="leading-loose mt-6">SvelteKit's focus on performance, combined with Svelte's unique compiled approach, results in incredibly fast applications and a delightful developer experience. It's a powerful choice for projects of any scale.</p>
        </>
    ),
    11: (
        <>
            <p className="text-lg leading-relaxed mb-6">Go, often referred to as Golang, is a statically typed, compiled language renowned for its performance, simplicity, and strong concurrency features. For backend services, database interaction is a core requirement. Go provides a clean, standard way to work with SQL databases through its built-in \`database/sql\` package.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">The \`database/sql\` Package</h3>
            <p className="leading-loose mb-6">The \`database/sql\` package provides a generic SQL interface but doesn't include any specific database drivers. To connect to a database like PostgreSQL, MySQL, or SQLite, you need to import a corresponding driver. The driver registers itself with \`database/sql\`, and you interact with it through the standard \`sql\` package functions.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">Connecting and Querying</h3>
            <p className="leading-loose mb-6">The process typically involves opening a connection with a connection string, executing a query, and then scanning the results into Go variables or structs.</p>
            <CodeBlock>
{`package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq" // PostgreSQL driver
)

type User struct {
	ID   int
	Name string
}

func main() {
	connStr := "user=pqgotest dbname=pqgotest sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT id, name FROM users WHERE id = $1", 1)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var user User
		if err := rows.Scan(&user.ID, &user.Name); err != nil {
			log.Fatal(err)
		}
		fmt.Printf("User found: %+v\\n", user)
	}
}`}
            </CodeBlock>
            <blockquote className="my-6 border-l-4 border-button-secondary pl-4 italic text-gray-400">
                Notice the blank import \`_ "github.com/lib/pq"\`. This is the standard way to import a database driver; you don't use the driver package directly, but the import statement ensures its \`init()\` function runs, registering it with \`database/sql\`.
            </blockquote>
            <p className="leading-loose mt-6">Go's approach to database connectivity promotes clean, maintainable code by separating the database-specific implementation (the driver) from the application logic that uses it.</p>
        </>
    ),
    12: (
        <>
            <p className="text-lg leading-relaxed mb-6">In modern web applications, securing APIs is crucial. JSON Web Tokens (JWT) have become the industry standard for creating a stateless authentication mechanism. A JWT is a compact, URL-safe string that contains "claims" (pieces of information) about a user, which can be verified and trusted by the server because it is digitally signed.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">The Structure of a JWT</h3>
            <p className="leading-loose mb-6">A JWT consists of three parts separated by dots (\`.\`):</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Header:</strong> Contains the token type (JWT) and the signing algorithm (e.g., HMAC SHA256 or RSA).</li>
                <li><strong>Payload:</strong> Contains the claims, which are statements about an entity (typically, the user) and additional data. Common claims include \`sub\` (subject/user ID), \`iat\` (issued at), and \`exp\` (expiration time).</li>
                <li><strong>Signature:</strong> A cryptographic signature created by signing the encoded header, the encoded payload, and a secret key. This signature ensures that the token hasn't been tampered with.</li>
            </ul>
            <h3 className="text-3xl font-bold mt-8 mb-4">JWT Authentication Flow in Node.js</h3>
            <p className="leading-loose mb-6">Here's a typical authentication flow using Express.js and the \`jsonwebtoken\` library:</p>
            <CodeBlock>
{`const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-super-secret-key';

// 1. User logs in, server creates and signs a token
app.post('/login', (req, res) => {
  // ...authenticate user...
  const user = { id: 1, username: 'alex' };
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// 2. Middleware to protect routes
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// 3. Apply middleware to a protected route
app.get('/profile', verifyToken, (req, res) => {
  // req.user is available here
  res.json({ message: \`Welcome \${req.user.username}\` });
});`}
            </CodeBlock>
            <p className="leading-loose mt-6">Because the server only needs the secret key to verify the token, it doesn't need to store session information in a database. This stateless nature makes JWTs highly scalable and ideal for microservice architectures.</p>
        </>
    ),
    13: (
        <>
            <p className="text-lg leading-relaxed mb-6">Serverless computing allows you to build and run applications without thinking about servers. AWS Lambda is a cornerstone of this paradigm, an event-driven compute service that lets you run code for virtually any application or backend service without provisioning or managing infrastructure. You simply upload your code, and Lambda handles everything required to run and scale your code with high availability.</p>
            <h3 className="text-3xl font-bold mt-8 mb-4">How Lambda Works</h3>
            <p className="leading-loose mb-6">Lambda functions are triggered by events. These events can come from over 200 AWS services or your own applications. For example, you can trigger a Lambda function to:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Respond to HTTP requests from Amazon API Gateway.</li>
                <li>Process an image file uploaded to an S3 bucket.</li>
                <li>React to data changes in a DynamoDB table.</li>
                <li>Run on a schedule using Amazon EventBridge.</li>
            </ul>
            <h3 className="text-3xl font-bold mt-8 mb-4">The Lambda Handler</h3>
            <p className="leading-loose mb-6">The entry point for your Lambda function is the "handler". This is the function that Lambda executes when it's invoked. It receives an \`event\` object containing information about the trigger and a \`context\` object with runtime information.</p>
            <p className="leading-loose mb-6">Here is a simple Node.js handler for an API Gateway trigger, which returns a "Hello World" message:</p>
            <CodeBlock>
{`// index.js

exports.handler = async (event) => {
  console.log("Event: ", event); // Log the incoming event

  const name = event.queryStringParameters?.name || 'World';

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: \`Hello, \${name}!\`,
    }),
  };

  return response;
};`}
            </CodeBlock>
            <p className="leading-loose mt-6">With AWS Lambda, you pay only for the compute time you consume—there is no charge when your code is not running. This pay-as-you-go model, combined with automatic scaling, makes Lambda an incredibly cost-effective and powerful tool for building modern, event-driven applications.</p>
        </>
    ),
};

interface PostContentProps {
    postId: number;
}

const PostContent: React.FC<PostContentProps> = ({ postId }) => {
    return (
        <article className="prose dark:prose-invert lg:prose-xl max-w-6xl mx-auto mt-16">
            {BLOG_CONTENT[postId] || <p>This post has no content yet.</p>}
        </article>
    );
};

export default PostContent;