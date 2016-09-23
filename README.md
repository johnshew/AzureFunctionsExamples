# Azure Functions Examples

This example focused on the ability to carry a state bag between function instances.  In this case there is a userid that is the reference to a blob in Azure Storage that gets passed along and updated through subsequent invocations.

Note that first you'll need to configure your storage account and change the function.json files to match.

Use RestCallWithOutputToBlobStorage with name=x and userid=y.  Where y is the name of a blob created with { name: x } as the contents.

Use RestCallWithLookupParameter with userid=y where y is a userid that was set in the initial output.
