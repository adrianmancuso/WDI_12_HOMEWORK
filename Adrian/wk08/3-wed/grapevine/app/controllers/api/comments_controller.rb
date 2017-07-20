class Api::CommentsController < ApplicationController

	def index
		@article_id = params[:id]
		comments = Comment.where(article_id: params[:id])

		render json: comments		
	end	

end