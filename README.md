// File 4: README.md
# Prego Food & Beverage Knowledge API

## Overview
The Prego Overseer system provides comprehensive Italian culinary knowledge from the Prego Food & Beverage manual.

## Features
- 🇮🇹 Complete Italian regional cuisine knowledge
- 🍝 Pasta types, sauces, and preparation methods  
- 🍷 Wine classification and pairing recommendations
- 🧀 Italian cheese varieties and characteristics
- 🥓 Salumi (cured meats) knowledge
- 🍕 Pizza styles and traditional recipes
- ☕ Italian coffee and beverage culture
- 🔍 Advanced search functionality

## API Endpoints

### Core Endpoints
- `GET /` - API overview and available endpoints
- `GET /health` - System health check

### Manual Access
- `GET /api/prego-manual` - Complete manual data
- `GET /api/prego-manual/search?q=query` - Search all content
- `GET /api/prego-manual/section/ingredients_knowledge` - Specific section
- `GET /api/prego-manual/topic/pasta` - Topic information

### Specialized Services  
- `GET /api/prego-manual/wine-pairing?dish=seafood` - Wine recommendations

## Available Sections
1. `geography_regions` - Italian regional cuisine overview
2. `ingredients_knowledge` - Key Italian ingredients  
3. `salumi_knowledge` - Italian cured meats
4. `cheese_knowledge` - Italian cheese varieties
5. `pasta_knowledge` - Pasta types and preparation
6. `wine_knowledge` - Wine classification and pairing
7. `beverages_knowledge` - Italian drinks and coffee culture
8. `pizza_knowledge` - Pizza styles and traditions

## Example Queries
- Search pasta: `/api/prego-manual/search?q=pasta`
- Wine pairing: `/api/prego-manual/wine-pairing?dish=seafood risotto`
- Cheese info: `/api/prego-manual/topic/parmigiano`
- Regional cuisine: `/api/prego-manual/section/geography_regions`

## System
Powered by **Prego Overseer** - Advanced Italian culinary knowledge system

## Deployment
Railway: https://your-app-name.railway.app