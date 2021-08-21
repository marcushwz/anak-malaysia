# frozen_string_literal: true
Rails.application.routes.draw do
  get "static_pages/home"
  get "static_pages/about"
  get "static_pages/contribution"
  get "static_pages/credits"
  get "static_pages/history"
  get "static_pages/politicians"
  get "static_pages/malaysian"

  root to: "static_pages#home"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
