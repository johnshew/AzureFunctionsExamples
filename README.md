# Azure Functions Examples

This example focuses on the ability to carry a state bag between function calls.  

In this case there is a userid that is the reference to a blob in Azure Storage.  This blob that gets passed along as a parameter to the functions and can be updated for subsequent calls.

Note that first you'll need to configure your storage account and change the function.json files to match.

Use RestCallWithOutputToBlobStorage with name=x and userid=y.  Where y is the name of a blob created with { name: x } as the contents.

Use RestCallWithLookupParameter with userid=y where y is a userid that was set in the initial output.
