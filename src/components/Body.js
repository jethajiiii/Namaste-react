import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const resList = 
    [
       
                    {
                      "info": {
                        "id": "74432",
                        "name": "Domino's Pizza",
                        "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/b52cdf13-7dcb-4660-ac1d-ea6dbf842c07_74432.JPG",
                        "locality": "Fatehabad Road",
                        "areaName": "Tajganj",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "Pizzas",
                          "Italian",
                          "Pastas",
                          "Desserts"
                        ],
                        "avgRating": 4.5,
                        "parentId": "2456",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "3.8K+",
                        "sla": {
                          "deliveryTime": 25,
                          "lastMileTravel": 4.4,
                          "serviceability": "SERVICEABLE",
                          "slaString": "20-25 mins",
                          "lastMileTravelString": "4.4 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2025-02-11 02:59:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                              "description": "Delivery!"
                            },
                            {
                              "imageId": "Rxawards/_CATEGORY-Pizza.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                                  }
                                },
                                {
                                  "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                  }
                                }
                              ]
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹89"
                        },
                        "loyaltyDiscoverPresentationInfo": {
                          "logoCtx": {
                            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                          },
                          "freedelMessage": "FREE DELIVERY",
                          "badgeType": "BADGE_TYPE_ONE_LITE"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "2.7K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        "context": "seo-data-25eced69-c308-491f-ac42-82c77f91a491"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/city/agra/dominos-pizza-fatehabad-road-tajganj-rest74432",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                      "info": {
                        "id": "809929",
                        "name": "Burger King",
                        "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_809929.JPG",
                        "locality": "Fatehabad Road",
                        "areaName": "Agra",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "Burgers",
                          "American"
                        ],
                        "avgRating": 4.4,
                        "parentId": "166",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "1.2K+",
                        "sla": {
                          "deliveryTime": 34,
                          "lastMileTravel": 4.4,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "4.4 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2025-02-11 04:00:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Rxawards/_CATEGORY-Burger.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                  }
                                }
                              ]
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "60% OFF",
                          "subHeader": "UPTO ₹120"
                        },
                        "loyaltyDiscoverPresentationInfo": {
                          "logoCtx": {
                            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                          },
                          "freedelMessage": "FREE DELIVERY",
                          "badgeType": "BADGE_TYPE_ONE_LITE"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        "context": "seo-data-25eced69-c308-491f-ac42-82c77f91a491"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/city/agra/burger-king-fatehabad-road-agra-rest809929",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                      "info": {
                        "id": "674149",
                        "name": "La Pino'z Pizza",
                        "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d20fdc8c86aa8bd0638f47dd013d46f9",
                        "locality": "CROWN PLAZA",
                        "areaName": "Tajganj",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "Pizzas",
                          "Pastas",
                          "Italian",
                          "Desserts",
                          "Beverages"
                        ],
                        "avgRating": 4.2,
                        "parentId": "4961",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "927",
                        "sla": {
                          "deliveryTime": 38,
                          "lastMileTravel": 3.7,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "3.7 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2025-02-11 01:30:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                                  }
                                }
                              ]
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "40% OFF",
                          "subHeader": "UPTO ₹80"
                        },
                        "loyaltyDiscoverPresentationInfo": {
                          "logoCtx": {
                            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                          },
                          "freedelMessage": "FREE DELIVERY",
                          "badgeType": "BADGE_TYPE_ONE_LITE"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        "context": "seo-data-25eced69-c308-491f-ac42-82c77f91a491"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/city/agra/la-pinoz-pizza-crown-plaza-tajganj-rest674149",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                      "info": {
                        "id": "253782",
                        "name": "McDonald's",
                        "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/3b27a04b-c6ae-4c6b-911d-f2bed8730073_253782.JPG",
                        "locality": "UP Agra TDI Mall",
                        "areaName": "Tajganj",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "American"
                        ],
                        "avgRating": 4.4,
                        "parentId": "630",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "4.2K+",
                        "sla": {
                          "deliveryTime": 30,
                          "lastMileTravel": 4.2,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "4.2 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2025-02-11 00:45:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                              "description": "Delivery!"
                            },
                            {
                              "imageId": "Rxawards/_CATEGORY-Burger.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                  }
                                },
                                {
                                  "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                  }
                                }
                              ]
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹49"
                        },
                        "loyaltyDiscoverPresentationInfo": {
                          "logoCtx": {
                            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                          },
                          "freedelMessage": "FREE DELIVERY",
                          "badgeType": "BADGE_TYPE_ONE_LITE"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        "context": "seo-data-25eced69-c308-491f-ac42-82c77f91a491"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/city/agra/mcdonalds-up-tdi-mall-tajganj-rest253782",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                      "info": {
                        "id": "74332",
                        "name": "Subway",
                        "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/b7c7e102-a64d-44d4-b1e1-59ae48de2949_74332.JPG",
                        "locality": "Tajganj",
                        "areaName": "Tajganj",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                          "sandwich",
                          "Salads",
                          "wrap",
                          "Healthy Food"
                        ],
                        "avgRating": 4.4,
                        "parentId": "2",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "3.9K+",
                        "sla": {
                          "deliveryTime": 31,
                          "lastMileTravel": 3.7,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "3.7 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2025-02-11 01:30:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "40% OFF",
                          "subHeader": "UPTO ₹80"
                        },
                        "loyaltyDiscoverPresentationInfo": {
                          "logoCtx": {
                            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                          },
                          "freedelMessage": "FREE DELIVERY",
                          "badgeType": "BADGE_TYPE_ONE_LITE"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "1.4K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        "context": "seo-data-25eced69-c308-491f-ac42-82c77f91a491"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/city/agra/subway-tajganj-rest74332",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                      "info": {
                        "id": "75858",
                        "name": "KFC",
                        "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/dc6c8b85-39ca-4eaa-8c8a-754b08647c25_75858.JPG",
                        "locality": "Tajganj",
                        "areaName": "Tajganj",
                        "costForTwo": "₹450 for two",
                        "cuisines": [
                          "Burgers",
                          "Fast Food",
                          "Rolls & Wraps"
                        ],
                        "avgRating": 4.3,
                        "parentId": "547",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "3.9K+",
                        "sla": {
                          "deliveryTime": 30,
                          "lastMileTravel": 3.6,
                          "serviceability": "SERVICEABLE",
                          "slaString": "30-35 mins",
                          "lastMileTravelString": "3.6 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2025-02-11 02:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹59"
                        },
                        "loyaltyDiscoverPresentationInfo": {
                          "logoCtx": {
                            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                          },
                          "freedelMessage": "FREE DELIVERY",
                          "badgeType": "BADGE_TYPE_ONE_LITE"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "4.1",
                            "ratingCount": "5.4K+"
                          },
                          "source": "GOOGLE",
                          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        "context": "seo-data-25eced69-c308-491f-ac42-82c77f91a491"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/city/agra/kfc-tajganj-rest75858",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                      "info": {
                        "id": "966186",
                        "name": "Bakingo",
                        "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/baed40ce-34d9-44f3-9236-342ff853e7f6_966186.jpg",
                        "locality": "Tajganj",
                        "areaName": "Kaveri Vihar-1",
                        "costForTwo": "₹299 for two",
                        "cuisines": [
                          "Bakery",
                          "Desserts",
                          "Beverages",
                          "Snacks"
                        ],
                        "avgRating": 4.6,
                        "parentId": "3818",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "145",
                        "sla": {
                          "deliveryTime": 24,
                          "lastMileTravel": 2.2,
                          "serviceability": "SERVICEABLE",
                          "slaString": "20-25 mins",
                          "lastMileTravelString": "2.2 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2025-02-10 23:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "subHeader": "UPTO ₹100"
                        },
                        "loyaltyDiscoverPresentationInfo": {
                          "logoCtx": {
                            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                          },
                          "freedelMessage": "FREE DELIVERY",
                          "badgeType": "BADGE_TYPE_ONE_LITE"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "isNewlyOnboarded": true,
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        "context": "seo-data-25eced69-c308-491f-ac42-82c77f91a491"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/city/agra/bakingo-tajganj-kaveri-vihar-1-rest966186",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    },
                    {
                      "info": {
                        "id": "991587",
                        "name": "Wendy's Burgers",
                        "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/314ced0a-72f9-434c-a853-29c48d756556_991587.JPG",
                        "locality": "Chungi Andar",
                        "areaName": "Tajgaj Ward",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Burgers",
                          "American",
                          "Fast Food",
                          "Snacks"
                        ],
                        "avgRating": 4.2,
                        "parentId": "972",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "27",
                        "sla": {
                          "deliveryTime": 35,
                          "lastMileTravel": 3.9,
                          "serviceability": "SERVICEABLE",
                          "slaString": "35-40 mins",
                          "lastMileTravelString": "3.9 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2025-02-10 23:59:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "ITEMS",
                          "subHeader": "AT ₹59"
                        },
                        "loyaltyDiscoverPresentationInfo": {
                          "logoCtx": {
                            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                          },
                          "freedelMessage": "FREE DELIVERY",
                          "badgeType": "BADGE_TYPE_ONE_LITE"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "isNewlyOnboarded": true,
                        "restaurantOfferPresentationInfo": {
                          
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                      },
                      "analytics": {
                        "context": "seo-data-25eced69-c308-491f-ac42-82c77f91a491"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/city/agra/wendys-burgers-chungi-andar-tajgaj-ward-rest991587",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                    }
                  ]
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState([])   
  
    return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn"
              onClick = {() => {
                const filteredList = ListOfRestaurants.filter(
                  (res) => ListOfRestaurants.info.avgRating > 4
                )
                setListOfRestaurant(filteredList) 
              }}
              >
                Top Rated Restaurants</button>
            </div>
            <div className="rest-container">
                <RestaurantCard resData = {resList[0]} />
                <RestaurantCard resData = {resList[1]} />
                <RestaurantCard resData = {resList[2]} />
                <RestaurantCard resData = {resList[3]} />
                <RestaurantCard resData = {resList[4]} />
                <RestaurantCard resData = {resList[5]} />
                <RestaurantCard resData = {resList[6]} />
                <RestaurantCard resData = {resList[7]} />
                {/* {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={resList.info.id} resList={restaurant}/>
                ))} */}
            </div>
        </div>
    )
}

export default Body;



