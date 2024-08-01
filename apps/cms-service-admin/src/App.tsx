import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { LanguageList } from "./language/LanguageList";
import { LanguageCreate } from "./language/LanguageCreate";
import { LanguageEdit } from "./language/LanguageEdit";
import { LanguageShow } from "./language/LanguageShow";
import { TranslationValueList } from "./translationValue/TranslationValueList";
import { TranslationValueCreate } from "./translationValue/TranslationValueCreate";
import { TranslationValueEdit } from "./translationValue/TranslationValueEdit";
import { TranslationValueShow } from "./translationValue/TranslationValueShow";
import { TranslationKeyList } from "./translationKey/TranslationKeyList";
import { TranslationKeyCreate } from "./translationKey/TranslationKeyCreate";
import { TranslationKeyEdit } from "./translationKey/TranslationKeyEdit";
import { TranslationKeyShow } from "./translationKey/TranslationKeyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CMSService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Organization"
          list={OrganizationList}
          edit={OrganizationEdit}
          create={OrganizationCreate}
          show={OrganizationShow}
        />
        <Resource
          name="Language"
          list={LanguageList}
          edit={LanguageEdit}
          create={LanguageCreate}
          show={LanguageShow}
        />
        <Resource
          name="TranslationValue"
          list={TranslationValueList}
          edit={TranslationValueEdit}
          create={TranslationValueCreate}
          show={TranslationValueShow}
        />
        <Resource
          name="TranslationKey"
          list={TranslationKeyList}
          edit={TranslationKeyEdit}
          create={TranslationKeyCreate}
          show={TranslationKeyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
