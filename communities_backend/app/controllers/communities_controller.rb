class CommunitiesController < ApplicationController
  def index
    communities = Community.all
    render json: CommunitiesSerializer.new(communities).serializable_hash
  end

  def show
  end

  def create
  end
end
