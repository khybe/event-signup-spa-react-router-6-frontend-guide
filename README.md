# Event Signup SPA with React Router 6 - Frontend Guide

Welcome to the "Event Signup SPA with React Router 6 - Frontend Guide" repository! This repository is a comprehensive guide for building a Single Page Application (SPA) for event signups using React Router 6. By following this guide and exploring the commits, you'll learn how to create a dynamic and interactive event signup application with user authentication, data fetching, route protection, and more.

## Table of Contents

- [Introduction](#introduction)
- [Project Setup & Route Setup for Authentication](#project-and-route-setup)
- [Working with Query Parameters to Switch Between Login and Signup Mode](#working-with-query-parameters)
- [Validating User Input & Outputting Validation Errors](#validating-user-input)
- [Implementing the Auth Action](#implementing-auth-action)
- [Controlling Which Data Should Be Deferred](#controlling-data-defer)
- [Deferring Data Fetching with defer() (Useful for Better UX)](#deferring-data-fetching)
- [Using Data From A Loader In The Route Component](#using-data-from-loader)
- [Adding HomePage Content](#adding-homepage-content)
- [Planning Data Submission](#planning-data-submission)
- [Working with action() Functions for Submitting New Events](#working-with-action-functions)
- [Updating the UI State Based on the Submission Status](#updating-ui-based-on-submission)
- [Submitting Data Programmatically (In this Case Deleting an Event)](#submitting-data-programmatically)
- [The json() Utility Function](#json-utility-function)
- [The useRouteLoaderData() Hook & Accessing Data From Other Routes](#use-route-loader-data)
- [Dynamic Routes & loader()s](#dynamic-routes-and-loaders)
- [Validating User Input & Outputting Validation Errors](#validating-user-input-again)
- [Reusing Actions via Request Methods](#reusing-actions-via-request-methods)
- [Behind-the-Scenes Work with useFetcher()](#behind-the-scenes-work)
- [Controlling Which Data Should Be Deferred](#controlling-data-defer-again)
- [Deferring Data Fetching with defer() (Useful for Better UX)](#deferring-data-fetching-again)
- [Extracting Error Data & Throwing Responses with Generic Error Handling](#extracting-error-data)
- [Error Handling with Custom Errors](#error-handling-with-custom-errors)
- [Returning Responses in loader()s](#returning-responses-in-loaders)
- [Reflecting The Current Navigation State in the UI](#reflecting-current-navigation-state)
- [Where should loader() Code Be Stored?](#where-should-loaders-be-stored)
- [Managing the Token Expiration](#managing-token-expiration)
- [Adding User Logout](#adding-user-logout)
- [Attaching Auth Tokens to Outgoing Requests](#attaching-auth-tokens-to-requests)
- [Adding Automatic Logout (Completion on Next Commit)](#adding-automatic-logout)
- [Adding Route Protection](#adding-route-protection)
- [Updating the UI Based on Auth Status](#updating-ui-based-on-auth)
- [Complete Practice Solution](#complete-practice-solution)

## Introduction

This guide takes you through the process of building an Event Signup Single Page Application (SPA) using React Router 6. Each commit represents a step in the development process, allowing you to follow along and understand the concepts and techniques applied.

## Project Setup & Route Setup for Authentication

The commit titled "Project Setup & Route Setup for Authentication" (committed on Apr 10) initializes the project and sets up the initial routes for user authentication.

## Working with Query Parameters to Switch Between Login and Signup Mode

The commit titled "Working with Query Parameters to Switch Between Login and Signup Mode" (committed on Apr 10) introduces query parameters to dynamically switch between login and signup modes.

## Validating User Input & Outputting Validation Errors

The commit titled "Validating User Input & Outputting Validation Errors" (committed on Apr 10) demonstrates how to validate user input and display validation errors.

## Implementing the Auth Action

The commit titled "Implementing the Auth Action" (committed on Apr 10) implements authentication actions for user login and signup.

## Controlling Which Data Should Be Deferred

The commit titled "Controlling Which Data Should Be Deferred" (committed on Apr 5) showcases how to manage data fetching using the `defer()` function for better user experience.

## Deferring Data Fetching with defer() (Useful for Better UX)

The commit titled "Deferring Data Fetching with defer() (Useful for Better UX)" (committed on Apr 5) delves into the usage of `defer()` for deferring data fetching, enhancing the application's loading behavior.

## Using Data From A Loader In The Route Component

The commit titled "Using Data From A Loader In The Route Component" (committed on Mar 29) illustrates how to use data fetched from a loader in a route component.

## Adding HomePage Content

The commit titled "Adding HomePage Content" (committed on Apr 5) enriches the application by adding content to the homepage.

## Planning Data Submission

The commit titled "Planning Data Submission" (committed on Mar 31) lays the groundwork for handling data submission in the application.

## Working with action() Functions for Submitting New Events

The commit titled "Working with action() Functions for Submitting New Events" (committed on Mar 31) guides you through submitting new events using `action()` functions.

## Updating the UI State Based on the Submission Status

The commit titled "Updating the UI State Based on the Submission Status" (committed on Apr 3) demonstrates how to update the UI based on the outcome of data submission.

## Submitting Data Programmatically (In this Case Deleting an Event)

The commit titled "Submitting Data Programmatically (In this Case Deleting an Event)" (committed on Apr 3) explains how to programmatically submit data, exemplified by the process of deleting an event.

## The json() Utility Function

The commit titled "The json() Utility Function" (committed on Mar 31) introduces the `json()` utility function to handle JSON responses from API requests.

## The useRouteLoaderData() Hook & Accessing Data From Other Routes

The commit titled "The useRouteLoaderData() Hook & Accessing Data From Other Routes" (committed on Mar 31) introduces the `useRouteLoaderData()` hook for accessing data from different routes.

## Dynamic Routes & loader()s

The commit titled "Dynamic Routes & loader()s" (committed on Mar 31) explores dynamic routes and the usage of `loader()` functions for route data fetching.

## Extracting Error Data & Throwing Responses with Generic Error Handling

The commit titled "Extracting Error Data & Throwing Responses with Generic Error Handling" (committed on Mar 30) covers extracting error data and handling responses with a generic error handling approach.

## Error Handling with Custom Errors

The commit titled "Error Handling with Custom Errors" (committed on Mar 30) extends error handling to custom error responses.

## Returning Responses in loader()s

The commit titled "Returning Responses in loader()s" (committed on Mar 30) focuses on returning responses within `loader()` functions.

## Reflecting The Current Navigation State in the UI

The commit titled "Reflecting The

 Current Navigation State in the UI" (committed on March 30) demonstrates how to indicate loading states based on navigation.

## Where should loader() Code Be Stored?

The commit titled "Where should loader() Code Be Stored?" (committed on Mar 30) discusses the appropriate location for storing `loader()` code.

## Managing the Token Expiration

The commit titled "Managing the Token Expiration" (committed on May 24) addresses token expiration concerns within the application.

## Adding User Logout

The commit titled "Adding User Logout" (committed on May 18) introduces the functionality of user logout.

## Attaching Auth Tokens to Outgoing Requests

The commit titled "Attaching Auth Tokens to Outgoing Requests" (committed on May 18) explains how to include authentication tokens in outgoing requests.

## Adding Automatic Logout (Completion on Next Commit)

The commit titled "Adding Automatic Logout (Completion on Next Commit)" (committed on May 22) initiates the process of adding automatic logout functionality.

## Adding Route Protection

The commit titled "Adding Route Protection" (committed on May 22) demonstrates adding protection to routes based on user authentication status.

## Updating the UI Based on Auth Status

The commit titled "Updating the UI Based on Auth Status" (committed on May 22) guides you in updating the UI according to the user's authentication status.

## Complete Practice Solution

The commit titled "Complete Practice Solution" (committed on March 27) marks the completion of the practice solution within the guide.

## Additional Resources

For further insights on building React applications with React Router and managing authentication, please refer to the following resources:

- [React Router Documentation](https://reactrouter.com/)
- [Authentication in React Apps with JWT](https://www.freecodecamp.org/news/authentication-in-react-apps-with-jwt/)
- [Using fetch with async/await](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Feel free to explore each commit and learn how to build a feature-rich and dynamic event signup SPA using React Router 6.

Happy coding! 🌟🚀
