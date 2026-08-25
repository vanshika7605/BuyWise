import numpy as np
from sklearn.linear_model import LogisticRegression

rng = np.random.default_rng(42)

N_USERS = 5000
PRODUCTS_PER_USER = 10

X = []
y = []

for _ in range(N_USERS):

    # Simulated user's preferences.
    preferences = rng.dirichlet(
        np.ones(6)
    )

    # Simulated product attributes.
    products = rng.uniform(
        50,
        100,
        size=(PRODUCTS_PER_USER, 6)
    )

    # Simulated user utility.
    utility = (
        (products / 100) @ preferences
        + rng.normal(
            0,
            0.03,
            PRODUCTS_PER_USER
        )
    )

    # Products in the top 25% are treated
    # as preferred by that user.
    threshold = np.quantile(
        utility,
        0.75
    )

    labels = (
        utility >= threshold
    ).astype(int)

    for product, label in zip(
        products,
        labels
    ):
        interaction_features = (
            product / 100
        ) * preferences

        X.append(
            np.r_[
                interaction_features,
                product[5] / 100
            ]
        )

        y.append(label)

X = np.array(X)
y = np.array(y)

model = LogisticRegression(
    max_iter=1000
)

model.fit(X, y)

print("Model trained successfully.")
print()
print("Coefficients:")
print(model.coef_[0])
print()
print("Intercept:")
print(model.intercept_[0])
print()
print(
    "Training accuracy:",
    model.score(X, y)
)