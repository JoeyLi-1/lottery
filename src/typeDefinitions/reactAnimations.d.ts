declare module "react-animations" {
    namespace DeepLinking {
        function addScheme(url: string): void;
        function addRoute(url: string, callback: any): void;
    }
    export = DeepLinking
  }