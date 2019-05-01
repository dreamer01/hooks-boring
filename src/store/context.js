import React from "react";

function ProviderComposer({ contexts, children }) {
	return contexts.reduceRight(
		(kids, parent) =>
			React.cloneElement(parent, {
				children: kids,
			}),
		children
	);
}

function ContextProvider({ children }) {
	return (
		<ProviderComposer
		// contexts={[<CheckoutProvider />, <LoginProvider />, <AlertProvider />]}
		>
			{children}
		</ProviderComposer>
	);
}

export { ContextProvider };
