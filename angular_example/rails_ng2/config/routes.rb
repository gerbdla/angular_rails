Rails.application.routes.draw do
  resources :stocks
  get "ng2-app", controller: "ng2_app", action: "index"
  get "ng2-app/*path", controller: "ng2_app", action: "index"
end
