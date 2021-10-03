import joi from "joi";

export const ValidateRestaurantCity = (city) => {
    const Schema = joi.object({
        city: joi.string().required(),
    });

    return Schema.validateAsync(city);
};

export const ValidateRestaurantSearchString = (resSearch) => {
    const Schema = joi.object({
        searchString: joi.string().required(),
    });

    return Schema.validateAsync(resSearch);
};