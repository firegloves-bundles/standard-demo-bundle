# Standard Demo Bundle
This is a dump using [entando-bundle-cli](https://github.com/entando-k8s/entando-bundle-cli) and the following environment:

### Disclaimer:
This is not supposed to be installable by Entando Repository Manager.
This is a dump used for understanding the contents inside the latest version of the Standard Demo
and to show as an example of the capabilities of extraction of the entando-bundle-cli and how you
should compose your bundles based on these extracted components.

### env.json
```
{
    "coreBaseApi": "http://quickstart-flex.apps.rd.entando.org/entando-de-app",
    "k8ssvcApi": "http://quickstart-eci-flex.apps.rd.entando.org/k8s",
    "clientId": "entando-bundle-cli",
    "clientSecret": "<insert_secret_here>"
}
```

### Dump Command:
```
$ entando-bundle from-env \
    --env env.json \
    --code standard-demo-bundle \
    --description "Standard Demo Bundle"
```

or use the interactive command to following the cli interactive version:
```
$ entando-bundle
? What do you want to do? Create a new bundle using components from an environment
? Please select an env.json file with the environment variables: env.json
? Which type of components do you want to add to the bundle? All components
Collecting all components from the provided environment...
? Do you want to generate the Bundle with the selected components? Yes
? Where do you want to generate the Bundle? ./
? What's the code for the Bundle? standard-demo-bundle
? Please add a description to the Bundle: Standard Demo Bundle
Generating bundle...
```
