class Admin::PhotosController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:create] #because the TinyMCE image uploader can't provide the auth token

  def create    
    @photo = Photo.new(params[:photo])

    respond_to do |format|
      if @photo.save
        #start the garbage collector
        GC.start
        flash[:notice] = "Фотография успешно загружена"
        format.js {
          responds_to_parent do
            render :update do |page|
              page << "upload_image_callback('#{@photo.photo.url(:thumb)}', '#{@photo.photo_file_name}', '#{@photo.id}');"
            end
          end
        }
      else
        format.js {
          responds_to_parent do
            render :update do |page|
              page.alert(":sorry_there_was_an_error_uploading_the_photo.l")
            end
          end
        }
      end
    end
  end

  def manage_photos
    @photos = Photo.find :all#, :page => {:size => 10, :current => params[:page]}

    respond_to do |format|
      format.js
    end
  end



end
